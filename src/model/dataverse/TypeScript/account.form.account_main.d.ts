/* eslint-disable */

declare namespace Xrm.Events {
  export interface EventContext {
    getFormContext<AccountMainFormContext>(): AccountMainFormContext;
  }
}

declare namespace XrmTable.Account {
    export interface AccountMainFormContext extends Xrm.FormContext {
        getAttribute(): Xrm.Collection.ItemCollection<Attributes.Attribute> | null;

        getControl(): Xrm.Collection.ItemCollection<Controls.Control> | null;

        /// <summary>
            /// Shows the complete primary address.
            /// </summary>
      getAttribute(name: "address1_composite"): Xrm.Attributes.StringAttribute;

        /// <summary>
            /// Shows the complete primary address.
            /// </summary>
      getControl(name: "address1_composite"): Xrm.Controls.StringControl;

        /// <summary>
            /// Select the freight terms for the primary address to make sure shipping orders are processed correctly.
            /// </summary>
      getAttribute(name: "address1_freighttermscode"): Xrm.Attributes.OptionSetAttribute;

        /// <summary>
            /// Select the freight terms for the primary address to make sure shipping orders are processed correctly.
            /// </summary>
      getControl(name: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;

        /// <summary>
            /// Select a shipping method for deliveries sent to this address.
            /// </summary>
      getAttribute(name: "address1_shippingmethodcode"): Xrm.Attributes.OptionSetAttribute;

        /// <summary>
            /// Select a shipping method for deliveries sent to this address.
            /// </summary>
      getControl(name: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;

        /// <summary>
            /// Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer.
            /// </summary>
      getAttribute(name: "creditlimit"): Xrm.Attributes.NumberAttribute;

        /// <summary>
            /// Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer.
            /// </summary>
      getControl(name: "creditlimit"): Xrm.Controls.NumberControl;

        /// <summary>
            /// Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer.
            /// </summary>
      getAttribute(name: "creditonhold"): Xrm.Attributes.BooleanAttribute;

        /// <summary>
            /// Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer.
            /// </summary>
      getControl(name: "creditonhold"): Xrm.Controls.BooleanControl;

        /// <summary>
            /// Type additional information to describe the account, such as an excerpt from the company's website.
            /// </summary>
      getAttribute(name: "description"): Xrm.Attributes.StringAttribute;

        /// <summary>
            /// Type additional information to describe the account, such as an excerpt from the company's website.
            /// </summary>
      getControl(name: "description"): Xrm.Controls.StringControl;

        /// <summary>
            /// Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email.
            /// </summary>
      getAttribute(name: "donotbulkemail"): Xrm.Attributes.BooleanAttribute;

        /// <summary>
            /// Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email.
            /// </summary>
      getControl(name: "donotbulkemail"): Xrm.Controls.BooleanControl;

        /// <summary>
            /// Select whether the account allows direct email sent from Microsoft Dynamics 365.
            /// </summary>
      getAttribute(name: "donotemail"): Xrm.Attributes.BooleanAttribute;

        /// <summary>
            /// Select whether the account allows direct email sent from Microsoft Dynamics 365.
            /// </summary>
      getControl(name: "donotemail"): Xrm.Controls.BooleanControl;

        /// <summary>
            /// Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns.
            /// </summary>
      getAttribute(name: "donotfax"): Xrm.Attributes.BooleanAttribute;

        /// <summary>
            /// Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns.
            /// </summary>
      getControl(name: "donotfax"): Xrm.Controls.BooleanControl;

        /// <summary>
            /// Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns.
            /// </summary>
      getAttribute(name: "donotphone"): Xrm.Attributes.BooleanAttribute;

        /// <summary>
            /// Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns.
            /// </summary>
      getControl(name: "donotphone"): Xrm.Controls.BooleanControl;

        /// <summary>
            /// Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns.
            /// </summary>
      getAttribute(name: "donotpostalmail"): Xrm.Attributes.BooleanAttribute;

        /// <summary>
            /// Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns.
            /// </summary>
      getControl(name: "donotpostalmail"): Xrm.Controls.BooleanControl;

        /// <summary>
            /// Type the fax number for the account.
            /// </summary>
      getAttribute(name: "fax"): Xrm.Attributes.StringAttribute;

        /// <summary>
            /// Type the fax number for the account.
            /// </summary>
      getControl(name: "fax"): Xrm.Controls.StringControl;

        /// <summary>
            /// Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account.
            /// </summary>
      getAttribute(name: "followemail"): Xrm.Attributes.BooleanAttribute;

        /// <summary>
            /// Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account.
            /// </summary>
      getControl(name: "followemail"): Xrm.Controls.BooleanControl;

        /// <summary>
            /// Select the account's primary industry for use in marketing segmentation and demographic analysis.
            /// </summary>
      getAttribute(name: "industrycode"): Xrm.Attributes.OptionSetAttribute;

        /// <summary>
            /// Select the account's primary industry for use in marketing segmentation and demographic analysis.
            /// </summary>
      getControl(name: "industrycode"): Xrm.Controls.OptionSetControl;

        /// <summary>
            /// Type the company or business name.
            /// </summary>
      getAttribute(name: "name"): Xrm.Attributes.StringAttribute;

        /// <summary>
            /// Type the company or business name.
            /// </summary>
      getControl(name: "name"): Xrm.Controls.StringControl;

        /// <summary>
            /// Type the number of employees that work at the account for use in marketing segmentation and demographic analysis.
            /// </summary>
      getAttribute(name: "numberofemployees"): Xrm.Attributes.NumberAttribute;

        /// <summary>
            /// Type the number of employees that work at the account for use in marketing segmentation and demographic analysis.
            /// </summary>
      getControl(name: "numberofemployees"): Xrm.Controls.NumberControl;

        /// <summary>
            /// Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
            /// </summary>
      getAttribute(name: "ownerid"): Xrm.Attributes.LookupAttribute;

        /// <summary>
            /// Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
            /// </summary>
      getControl(name: "ownerid"): Xrm.Controls.LookupControl;

        /// <summary>
            /// Select the account's ownership structure, such as public or private.
            /// </summary>
      getAttribute(name: "ownershipcode"): Xrm.Attributes.OptionSetAttribute;

        /// <summary>
            /// Select the account's ownership structure, such as public or private.
            /// </summary>
      getControl(name: "ownershipcode"): Xrm.Controls.OptionSetControl;

        /// <summary>
            /// Choose the parent account associated with this account to show parent and child businesses in reporting and analytics.
            /// </summary>
      getAttribute(name: "parentaccountid"): Xrm.Attributes.LookupAttribute;

        /// <summary>
            /// Choose the parent account associated with this account to show parent and child businesses in reporting and analytics.
            /// </summary>
      getControl(name: "parentaccountid"): Xrm.Controls.LookupControl;

        /// <summary>
            /// Select the payment terms to indicate when the customer needs to pay the total amount.
            /// </summary>
      getAttribute(name: "paymenttermscode"): Xrm.Attributes.OptionSetAttribute;

        /// <summary>
            /// Select the payment terms to indicate when the customer needs to pay the total amount.
            /// </summary>
      getControl(name: "paymenttermscode"): Xrm.Controls.OptionSetControl;

        /// <summary>
            /// Select the preferred method of contact.
            /// </summary>
      getAttribute(name: "preferredcontactmethodcode"): Xrm.Attributes.OptionSetAttribute;

        /// <summary>
            /// Select the preferred method of contact.
            /// </summary>
      getControl(name: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;

        /// <summary>
            /// Choose the primary contact for the account to provide quick access to contact details.
            /// </summary>
      getAttribute(name: "primarycontactid"): Xrm.Attributes.LookupAttribute;

        /// <summary>
            /// Choose the primary contact for the account to provide quick access to contact details.
            /// </summary>
      getControl(name: "primarycontactid"): Xrm.Controls.LookupControl;

        /// <summary>
            /// Type the annual revenue for the account, used as an indicator in financial performance analysis.
            /// </summary>
      getAttribute(name: "revenue"): Xrm.Attributes.NumberAttribute;

        /// <summary>
            /// Type the annual revenue for the account, used as an indicator in financial performance analysis.
            /// </summary>
      getControl(name: "revenue"): Xrm.Controls.NumberControl;

        /// <summary>
            /// Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis.
            /// </summary>
      getAttribute(name: "sic"): Xrm.Attributes.StringAttribute;

        /// <summary>
            /// Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis.
            /// </summary>
      getControl(name: "sic"): Xrm.Controls.StringControl;

        /// <summary>
            /// Type the main phone number for this account.
            /// </summary>
      getAttribute(name: "telephone1"): Xrm.Attributes.StringAttribute;

        /// <summary>
            /// Type the main phone number for this account.
            /// </summary>
      getControl(name: "telephone1"): Xrm.Controls.StringControl;

        /// <summary>
            /// Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money.
            /// </summary>
      getAttribute(name: "tickersymbol"): Xrm.Attributes.StringAttribute;

        /// <summary>
            /// Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money.
            /// </summary>
      getControl(name: "tickersymbol"): Xrm.Controls.StringControl;

        /// <summary>
            /// Choose the local currency for the record to make sure budgets are reported in the correct currency.
            /// </summary>
      getAttribute(name: "transactioncurrencyid"): Xrm.Attributes.LookupAttribute;

        /// <summary>
            /// Choose the local currency for the record to make sure budgets are reported in the correct currency.
            /// </summary>
      getControl(name: "transactioncurrencyid"): Xrm.Controls.LookupControl;

        /// <summary>
            /// Type the account's website URL to get quick details about the company profile.
            /// </summary>
      getAttribute(name: "websiteurl"): Xrm.Attributes.StringAttribute;

        /// <summary>
            /// Type the account's website URL to get quick details about the company profile.
            /// </summary>
      getControl(name: "websiteurl"): Xrm.Controls.StringControl;

      ui: AccountMainUi;
    }

    export interface AccountMainUi extends Xrm.Ui {
        tabs: AccountMainTabs;
    }

    export interface AccountMainTabs extends Xrm.Collection.ItemCollection<Xrm.Controls.Tab> {
        sections: AccountMainSUMMARYTABSections;

        get(itemName: "SUMMARY_TAB"): AccountMainSUMMARYTAB;
    }

    export interface AccountMainSUMMARYTAB extends Xrm.Controls.Tab {
        sections: AccountMainSUMMARYTABSections;
    }

    export interface AccountMainSUMMARYTABACCOUNT_INFORMATIONSection extends Xrm.Controls.Section {
        controls: AccountMainSUMMARYTABACCOUNT_INFORMATIONControlCollection;
    }

    export interface AccountMainSUMMARYTABACCOUNT_INFORMATIONControlCollection extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
        get(name: "name"): Xrm.Controls.StringControl;
        get(name: "telephone1"): Xrm.Controls.StringControl;
        get(name: "fax"): Xrm.Controls.StringControl;
        get(name: "websiteurl"): Xrm.Controls.StringControl;
        get(name: "parentaccountid"): Xrm.Controls.LookupControl;
        get(name: "tickersymbol"): Xrm.Controls.StringControl;
    }

    export interface AccountMainSUMMARYTABADDRESSSection extends Xrm.Controls.Section {
        controls: AccountMainSUMMARYTABADDRESSControlCollection;
    }

    export interface AccountMainSUMMARYTABADDRESSControlCollection extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
        get(name: "address1_composite"): Xrm.Controls.StringControl;
    }

    export interface AccountMainSUMMARYTABMapSectionSection extends Xrm.Controls.Section {
        controls: AccountMainSUMMARYTABMapSectionControlCollection;
    }

    export interface AccountMainSUMMARYTABMapSectionControlCollection extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
    }

    export interface AccountMainSUMMARYTABSOCIAL_PANE_TABSection extends Xrm.Controls.Section {
        controls: AccountMainSUMMARYTABSOCIAL_PANE_TABControlCollection;
    }

    export interface AccountMainSUMMARYTABSOCIAL_PANE_TABControlCollection extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
    }

    export interface AccountMainSUMMARYTABSummary_section_6Section extends Xrm.Controls.Section {
        controls: AccountMainSUMMARYTABSummary_section_6ControlCollection;
    }

    export interface AccountMainSUMMARYTABSummary_section_6ControlCollection extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
    }

    export interface AccountMainSUMMARYTABSUMMARY_TAB_section_6Section extends Xrm.Controls.Section {
        controls: AccountMainSUMMARYTABSUMMARY_TAB_section_6ControlCollection;
    }

    export interface AccountMainSUMMARYTABSUMMARY_TAB_section_6ControlCollection extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
        get(name: "primarycontactid"): Xrm.Controls.LookupControl;
    }



    export interface AccountMainSUMMARYTABSections extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
    get(itemName: "ACCOUNT_INFORMATION"): AccountMainSUMMARYTABACCOUNT_INFORMATIONSection;
    get(itemName: "ADDRESS"): AccountMainSUMMARYTABADDRESSSection;
    get(itemName: "MapSection"): AccountMainSUMMARYTABMapSectionSection;
    get(itemName: "SOCIAL_PANE_TAB"): AccountMainSUMMARYTABSOCIAL_PANE_TABSection;
    get(itemName: "Summary_section_6"): AccountMainSUMMARYTABSummary_section_6Section;
    get(itemName: "SUMMARY_TAB_section_6"): AccountMainSUMMARYTABSUMMARY_TAB_section_6Section;
    }
    export interface AccountMainTabs extends Xrm.Collection.ItemCollection<Xrm.Controls.Tab> {
        sections: AccountMainDETAILSTABSections;

        get(itemName: "DETAILS_TAB"): AccountMainDETAILSTAB;
    }

    export interface AccountMainDETAILSTAB extends Xrm.Controls.Tab {
        sections: AccountMainDETAILSTABSections;
    }

    export interface AccountMainDETAILSTABCOMPANY_PROFILESection extends Xrm.Controls.Section {
        controls: AccountMainDETAILSTABCOMPANY_PROFILEControlCollection;
    }

    export interface AccountMainDETAILSTABCOMPANY_PROFILEControlCollection extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
        get(name: "industrycode"): Xrm.Controls.OptionSetControl;
        get(name: "sic"): Xrm.Controls.StringControl;
        get(name: "ownershipcode"): Xrm.Controls.OptionSetControl;
    }

    export interface AccountMainDETAILSTABDETAILS_TAB_section_6Section extends Xrm.Controls.Section {
        controls: AccountMainDETAILSTABDETAILS_TAB_section_6ControlCollection;
    }

    export interface AccountMainDETAILSTABDETAILS_TAB_section_6ControlCollection extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
        get(name: "description"): Xrm.Controls.StringControl;
    }

    export interface AccountMainDETAILSTABCONTACT_PREFERENCESSection extends Xrm.Controls.Section {
        controls: AccountMainDETAILSTABCONTACT_PREFERENCESControlCollection;
    }

    export interface AccountMainDETAILSTABCONTACT_PREFERENCESControlCollection extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
        get(name: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
        get(name: "donotemail"): Xrm.Controls.BooleanControl;
        get(name: "followemail"): Xrm.Controls.BooleanControl;
        get(name: "donotbulkemail"): Xrm.Controls.BooleanControl;
        get(name: "donotphone"): Xrm.Controls.BooleanControl;
        get(name: "donotfax"): Xrm.Controls.BooleanControl;
        get(name: "donotpostalmail"): Xrm.Controls.BooleanControl;
    }

    export interface AccountMainDETAILSTABBILLINGSection extends Xrm.Controls.Section {
        controls: AccountMainDETAILSTABBILLINGControlCollection;
    }

    export interface AccountMainDETAILSTABBILLINGControlCollection extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
        get(name: "transactioncurrencyid"): Xrm.Controls.LookupControl;
        get(name: "creditlimit"): Xrm.Controls.NumberControl;
        get(name: "creditonhold"): Xrm.Controls.BooleanControl;
        get(name: "paymenttermscode"): Xrm.Controls.OptionSetControl;
    }

    export interface AccountMainDETAILSTABSHIPPINGSection extends Xrm.Controls.Section {
        controls: AccountMainDETAILSTABSHIPPINGControlCollection;
    }

    export interface AccountMainDETAILSTABSHIPPINGControlCollection extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
        get(name: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
        get(name: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
    }

    export interface AccountMainDETAILSTABChildAccountsSection extends Xrm.Controls.Section {
        controls: AccountMainDETAILSTABChildAccountsControlCollection;
    }

    export interface AccountMainDETAILSTABChildAccountsControlCollection extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
    }



    export interface AccountMainDETAILSTABSections extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
    get(itemName: "COMPANY_PROFILE"): AccountMainDETAILSTABCOMPANY_PROFILESection;
    get(itemName: "DETAILS_TAB_section_6"): AccountMainDETAILSTABDETAILS_TAB_section_6Section;
    get(itemName: "CONTACT_PREFERENCES"): AccountMainDETAILSTABCONTACT_PREFERENCESSection;
    get(itemName: "BILLING"): AccountMainDETAILSTABBILLINGSection;
    get(itemName: "SHIPPING"): AccountMainDETAILSTABSHIPPINGSection;
    get(itemName: "ChildAccounts"): AccountMainDETAILSTABChildAccountsSection;
    }
}
