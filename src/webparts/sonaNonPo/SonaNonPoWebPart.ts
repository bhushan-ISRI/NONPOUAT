import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { type IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'SonaNonPoWebPartStrings';
import SonaNonPo from './components/SonaNonPo';
import { ISonaNonPoProps } from './components/ISonaNonPoProps';

export interface ISonaNonPoWebPartProps {
  currentSPContext: any;
  description: string;
}

export default class SonaNonPoWebPart extends BaseClientSideWebPart<ISonaNonPoWebPartProps> {
  private _isDarkTheme = false;
  private _environmentMessage = '';

  public render(): void {
    const element: React.ReactElement<ISonaNonPoProps> = React.createElement(SonaNonPo, {
      description: this.properties?.description ?? '',

      context: this.context,
      currentSPContext: this.context, 
      isDarkTheme: this._isDarkTheme,
      environmentMessage: this._environmentMessage,
      hasTeamsContext: !!this.context?.sdks?.microsoftTeams,
      userDisplayName: this.context.pageContext.user.displayName,
      userEmail:this.context.pageContext.user.email //sn
    });

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      this._environmentMessage = message;
    });
  }

  private _getEnvironmentMessage(): Promise<string> {
    if (this.context?.sdks?.microsoftTeams) {
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext().then(ctx => {
        let msg = '';
        switch (ctx.app.host.name) {
          case 'Office':
            msg = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
            break;
          case 'Outlook':
            msg = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
            break;
          case 'Teams':
          case 'TeamsModern':
            msg = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
            break;
          default:
            msg = strings.UnknownEnvironment;
        }
        return msg;
      });
    }
    return Promise.resolve(
      this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment
    );
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) return;
    this._isDarkTheme = !!currentTheme.isInverted;
    const sc = currentTheme.semanticColors;
    if (sc) {
      this.domElement.style.setProperty('--bodyText', sc.bodyText || null);
      this.domElement.style.setProperty('--link', sc.link || null);
      this.domElement.style.setProperty('--linkHovered', sc.linkHovered || null);
    }
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: { description: strings.PropertyPaneDescription },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', { label: strings.DescriptionFieldLabel })
              ]
            }
          ]
        }
      ]
    };
  }
}


// import * as React from "react";
// import * as ReactDom from "react-dom";
// import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
// import Drr from "./components/Drr";
// import { ISonaNonPoProps } from "./components/ISonaNonPoProps";
// import { ISonaNonPoWebPartProps } from "./SonaNonPoWebPart"; // your property pane props interface

// export default class SonaNonPoWebPart extends BaseClientSideWebPart<ISonaNonPoWebPartProps> {
//   private _isDarkTheme: boolean = false;

//   // ... set _isDarkTheme in onThemeChanged, etc., and compute environmentMessage

//   public render(): void {
//     const propsForReact: ISonaNonPoProps = {
//       context: this.context,
//       currentSPContext: this.context,
//       description: this.properties?.description ?? "", // guarantee string
//       isDarkTheme: this._isDarkTheme,
//       environmentMessage: this._getEnvironmentMessage(),
//       hasTeamsContext: !!this.context.sdks?.microsoftTeams,
//       userDisplayName: this.context.pageContext.user.displayName,
//     };

//     const element = React.createElement(Drr, propsForReact);
//     ReactDom.render(element, this.domElement);
//   }
//   private _getEnvironmentMessage(): string {
//     throw new Error("Method not implemented.");
//   }

//   // ...
// }