// Automatically generated typings file https://github.com/DIGITALLNature/DigitallPower
/* eslint-disable */
declare namespace Xrm.Events {
    export interface EventContext {
        getFormContext<AccountFormContext>(): AccountFormContext;
    }
}

declare namespace XrmForm.Account {
    namespace Main.Account {
        export const enum FormData {
            FormId = "8448b78f-8f42-454e-8e2a-f8196b0419af",
        }

        export type ControlName =
            | "ActionCards"
            | "address1_composite"
            | "address1_freighttermscode"
            | "address1_shippingmethodcode"
            | "ChildAccounts"
            | "contactquickform"
            | "Contacts"
            | "creditlimit"
            | "creditonhold"
            | "description"
            | "donotbulkemail"
            | "donotemail"
            | "donotfax"
            | "donotphone"
            | "donotpostalmail"
            | "fax"
            | "followemail"
            | "industrycode"
            | "mapcontrol"
            | "name"
            | "notescontrol"
            | "ownershipcode"
            | "parentaccountid"
            | "paymenttermscode"
            | "preferredcontactmethodcode"
            | "primarycontactid"
            | "sic"
            | "telephone1"
            | "tickersymbol"
            | "transactioncurrencyid"
            | "websiteurl"
            | "header_numberofemployees"
            | "header_ownerid"
            | "header_revenue";
        
        export type AttributeName =
            | "address1_composite"
            | "address1_freighttermscode"
            | "address1_shippingmethodcode"
            | "creditlimit"
            | "creditonhold"
            | "description"
            | "donotbulkemail"
            | "donotemail"
            | "donotfax"
            | "donotphone"
            | "donotpostalmail"
            | "fax"
            | "followemail"
            | "industrycode"
            | "name"
            | "numberofemployees"
            | "ownerid"
            | "ownershipcode"
            | "parentaccountid"
            | "paymenttermscode"
            | "preferredcontactmethodcode"
            | "primarycontactid"
            | "revenue"
            | "sic"
            | "telephone1"
            | "tickersymbol"
            | "transactioncurrencyid"
            | "websiteurl";

        export interface FormContext extends Xrm.FormContext {
            __type: "Account.Main.Account";
            getAttribute(name: "address1_composite"): Xrm.Attributes.StringAttribute;
            getAttribute(name: "address1_freighttermscode"): Xrm.Attributes.OptionSetAttribute;
            getAttribute(name: "address1_shippingmethodcode"): Xrm.Attributes.OptionSetAttribute;
            getAttribute(name: "creditlimit"): Xrm.Attributes.NumberAttribute;
            getAttribute(name: "creditonhold"): Xrm.Attributes.BooleanAttribute;
            getAttribute(name: "description"): Xrm.Attributes.StringAttribute;
            getAttribute(name: "donotbulkemail"): Xrm.Attributes.BooleanAttribute;
            getAttribute(name: "donotemail"): Xrm.Attributes.BooleanAttribute;
            getAttribute(name: "donotfax"): Xrm.Attributes.BooleanAttribute;
            getAttribute(name: "donotphone"): Xrm.Attributes.BooleanAttribute;
            getAttribute(name: "donotpostalmail"): Xrm.Attributes.BooleanAttribute;
            getAttribute(name: "fax"): Xrm.Attributes.StringAttribute;
            getAttribute(name: "followemail"): Xrm.Attributes.BooleanAttribute;
            getAttribute(name: "industrycode"): Xrm.Attributes.OptionSetAttribute;
            getAttribute(name: "name"): Xrm.Attributes.StringAttribute;
            getAttribute(name: "numberofemployees"): Xrm.Attributes.NumberAttribute;
            getAttribute(name: "ownerid"): Xrm.Attributes.LookupAttribute;
            getAttribute(name: "ownershipcode"): Xrm.Attributes.OptionSetAttribute;
            getAttribute(name: "parentaccountid"): Xrm.Attributes.LookupAttribute;
            getAttribute(name: "paymenttermscode"): Xrm.Attributes.OptionSetAttribute;
            getAttribute(name: "preferredcontactmethodcode"): Xrm.Attributes.OptionSetAttribute;
            getAttribute(name: "primarycontactid"): Xrm.Attributes.LookupAttribute;
            getAttribute(name: "revenue"): Xrm.Attributes.NumberAttribute;
            getAttribute(name: "sic"): Xrm.Attributes.StringAttribute;
            getAttribute(name: "telephone1"): Xrm.Attributes.StringAttribute;
            getAttribute(name: "tickersymbol"): Xrm.Attributes.StringAttribute;
            getAttribute(name: "transactioncurrencyid"): Xrm.Attributes.LookupAttribute;
            getAttribute(name: "websiteurl"): Xrm.Attributes.StringAttribute;getAttribute(name: AttributeName): Xrm.Attributes.Attribute<Xrm.Attributes.AttributeValues> | null;
            getAttribute<T extends Xrm.Attributes.Attribute>(name: AttributeName): T | null;
            getAttribute<T>(name: string): T | null;
            getAttribute(delegateFunction?: Xrm.Collection.MatchingDelegate<Xrm.Attributes.Attribute>): Xrm.Attributes.Attribute[];
            getControl(name: "ActionCards"): Xrm.Controls.StandardControl;
            getControl(name: "address1_composite"): Xrm.Controls.StringControl;
            getControl(name: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
            getControl(name: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
            getControl(name: "ChildAccounts"): Xrm.Controls.GridControl;
            getControl(name: "contactquickform"): Xrm.Controls.QuickFormControl;
            getControl(name: "Contacts"): Xrm.Controls.GridControl;
            getControl(name: "creditlimit"): Xrm.Controls.NumberControl;
            getControl(name: "creditonhold"): Xrm.Controls.OptionSetControl;
            getControl(name: "description"): Xrm.Controls.StringControl;
            getControl(name: "donotbulkemail"): Xrm.Controls.OptionSetControl;
            getControl(name: "donotemail"): Xrm.Controls.OptionSetControl;
            getControl(name: "donotfax"): Xrm.Controls.OptionSetControl;
            getControl(name: "donotphone"): Xrm.Controls.OptionSetControl;
            getControl(name: "donotpostalmail"): Xrm.Controls.OptionSetControl;
            getControl(name: "fax"): Xrm.Controls.StringControl;
            getControl(name: "followemail"): Xrm.Controls.OptionSetControl;
            getControl(name: "industrycode"): Xrm.Controls.OptionSetControl;
            getControl(name: "mapcontrol"): Xrm.Controls.StandardControl;
            getControl(name: "name"): Xrm.Controls.StringControl;
            getControl(name: "notescontrol"): Xrm.Controls.StringControl;
            getControl(name: "ownershipcode"): Xrm.Controls.OptionSetControl;
            getControl(name: "parentaccountid"): Xrm.Controls.LookupControl;
            getControl(name: "paymenttermscode"): Xrm.Controls.OptionSetControl;
            getControl(name: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
            getControl(name: "primarycontactid"): Xrm.Controls.LookupControl;
            getControl(name: "sic"): Xrm.Controls.StringControl;
            getControl(name: "telephone1"): Xrm.Controls.StringControl;
            getControl(name: "tickersymbol"): Xrm.Controls.StandardControl;
            getControl(name: "transactioncurrencyid"): Xrm.Controls.LookupControl;
            getControl(name: "websiteurl"): Xrm.Controls.StringControl;
            getControl(name: "header_numberofemployees"): Xrm.Controls.NumberControl;
            getControl(name: "header_ownerid"): Xrm.Controls.LookupControl;
            getControl(name: "header_revenue"): Xrm.Controls.NumberControl;
            getControl(name: ControlName): Xrm.Controls.Control | null;
            getControl<T extends Xrm.Controls.Control>(name: ControlName): T | null;
            getControl<T>(name: string): T | null;
            getControl(delegateFunction?: Xrm.Collection.MatchingDelegate<Xrm.Controls.Control>): Xrm.Controls.Control[];

            ui: Ui;
            data: Data;
        }

        export interface Ui extends Xrm.Ui {
            tabs: Tabs;
            controls: Controls;
            quickForms: QuickForms;
        }

        export interface Data extends Xrm.Data {
            attributes: Attributes;
            entity: Entity;
        }

        export interface Entity extends Xrm.Entity {
            attributes: Attributes;
        }

        export interface Attributes extends Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute<Xrm.Attributes.AttributeValues>> {
            get(name: "address1_composite"): Xrm.Attributes.StringAttribute;
            get(name: "address1_freighttermscode"): Xrm.Attributes.OptionSetAttribute;
            get(name: "address1_shippingmethodcode"): Xrm.Attributes.OptionSetAttribute;
            get(name: "creditlimit"): Xrm.Attributes.NumberAttribute;
            get(name: "creditonhold"): Xrm.Attributes.BooleanAttribute;
            get(name: "description"): Xrm.Attributes.StringAttribute;
            get(name: "donotbulkemail"): Xrm.Attributes.BooleanAttribute;
            get(name: "donotemail"): Xrm.Attributes.BooleanAttribute;
            get(name: "donotfax"): Xrm.Attributes.BooleanAttribute;
            get(name: "donotphone"): Xrm.Attributes.BooleanAttribute;
            get(name: "donotpostalmail"): Xrm.Attributes.BooleanAttribute;
            get(name: "fax"): Xrm.Attributes.StringAttribute;
            get(name: "followemail"): Xrm.Attributes.BooleanAttribute;
            get(name: "industrycode"): Xrm.Attributes.OptionSetAttribute;
            get(name: "name"): Xrm.Attributes.StringAttribute;
            get(name: "numberofemployees"): Xrm.Attributes.NumberAttribute;
            get(name: "ownerid"): Xrm.Attributes.LookupAttribute;
            get(name: "ownershipcode"): Xrm.Attributes.OptionSetAttribute;
            get(name: "parentaccountid"): Xrm.Attributes.LookupAttribute;
            get(name: "paymenttermscode"): Xrm.Attributes.OptionSetAttribute;
            get(name: "preferredcontactmethodcode"): Xrm.Attributes.OptionSetAttribute;
            get(name: "primarycontactid"): Xrm.Attributes.LookupAttribute;
            get(name: "revenue"): Xrm.Attributes.NumberAttribute;
            get(name: "sic"): Xrm.Attributes.StringAttribute;
            get(name: "telephone1"): Xrm.Attributes.StringAttribute;
            get(name: "tickersymbol"): Xrm.Attributes.StringAttribute;
            get(name: "transactioncurrencyid"): Xrm.Attributes.LookupAttribute;
            get(name: "websiteurl"): Xrm.Attributes.StringAttribute;
            get(name: AttributeName): Xrm.Attributes.Attribute<Xrm.Attributes.AttributeValues> | null;
            get<T extends Xrm.Attributes.Attribute<Xrm.Attributes.AttributeValues>>(name: AttributeName): T | null;
            get<T>(name: string): T | null;
            get(delegate?: MatchingDelegate<Xrm.Attributes.Attribute<Xrm.Attributes.AttributeValues>>): Xrm.Attributes.Attribute<Xrm.Attributes.AttributeValues>[];
        }

        export interface Controls extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
            get(name: "ActionCards"): Xrm.Controls.StandardControl;
            get(name: "address1_composite"): Xrm.Controls.StringControl;
            get(name: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
            get(name: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
            get(name: "ChildAccounts"): Xrm.Controls.GridControl;
            get(name: "contactquickform"): Xrm.Controls.QuickFormControl;
            get(name: "Contacts"): Xrm.Controls.GridControl;
            get(name: "creditlimit"): Xrm.Controls.NumberControl;
            get(name: "creditonhold"): Xrm.Controls.OptionSetControl;
            get(name: "description"): Xrm.Controls.StringControl;
            get(name: "donotbulkemail"): Xrm.Controls.OptionSetControl;
            get(name: "donotemail"): Xrm.Controls.OptionSetControl;
            get(name: "donotfax"): Xrm.Controls.OptionSetControl;
            get(name: "donotphone"): Xrm.Controls.OptionSetControl;
            get(name: "donotpostalmail"): Xrm.Controls.OptionSetControl;
            get(name: "fax"): Xrm.Controls.StringControl;
            get(name: "followemail"): Xrm.Controls.OptionSetControl;
            get(name: "industrycode"): Xrm.Controls.OptionSetControl;
            get(name: "mapcontrol"): Xrm.Controls.StandardControl;
            get(name: "name"): Xrm.Controls.StringControl;
            get(name: "notescontrol"): Xrm.Controls.StringControl;
            get(name: "ownershipcode"): Xrm.Controls.OptionSetControl;
            get(name: "parentaccountid"): Xrm.Controls.LookupControl;
            get(name: "paymenttermscode"): Xrm.Controls.OptionSetControl;
            get(name: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
            get(name: "primarycontactid"): Xrm.Controls.LookupControl;
            get(name: "sic"): Xrm.Controls.StringControl;
            get(name: "telephone1"): Xrm.Controls.StringControl;
            get(name: "tickersymbol"): Xrm.Controls.StandardControl;
            get(name: "transactioncurrencyid"): Xrm.Controls.LookupControl;
            get(name: "websiteurl"): Xrm.Controls.StringControl;
            get(name: ControlName): Xrm.Controls.Control | null;
            get<T extends Xrm.Controls.Control>(name: ControlName): T | null;
            get<T>(name: string): T | null;
            get(delegate?: MatchingDelegate<Xrm.Controls.Control>): Xrm.Controls.Control[];
        }
        
        export type TabName =
            | "DETAILS_TAB"
            | "SUMMARY_TAB";

        export type SectionNames =
            | "COMPANY_PROFILE"
            | "DETAILS_TAB_section_6"
            | "CONTACT_PREFERENCES"
            | "BILLING"
            | "SHIPPING"
            | "ChildAccounts"
            | "ACCOUNT_INFORMATION"
            | "ADDRESS"
            | "MapSection"
            | "SOCIAL_PANE_TAB"
            | "Summary_section_6"
            | "SUMMARY_TAB_section_6";

        export interface Tabs extends Xrm.Collection.ItemCollection<Xrm.Controls.Tab> {get(itemName: "DETAILS_TAB"): DETAILSTAB;
            get(itemName: "SUMMARY_TAB"): SUMMARYTAB;
            get(name: TabName): Xrm.Controls.Tab | null;
            get<T extends Xrm.Controls.Tab>(name: TabName): T | null;
            get<T>(name: string): T | null;
            get(delegate?: Xrm.Collection.MatchingDelegate<Xrm.Controls.Tab>): Xrm.Controls.Tab[];
        }
        
        export interface DETAILSTAB extends Xrm.Controls.Tab {
            sections: DETAILSTABSections;
        }
        
        export interface DETAILSTABSections extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
            get(name: "COMPANY_PROFILE"): DETAILSTABCOMPANYPROFILE;
            get(name: "DETAILS_TAB_section_6"): DETAILSTABDETAILSTABSection6;
            get(name: "CONTACT_PREFERENCES"): DETAILSTABCONTACTPREFERENCES;
            get(name: "BILLING"): DETAILSTABBILLING;
            get(name: "SHIPPING"): DETAILSTABSHIPPING;
            get(name: "ChildAccounts"): DETAILSTABChildAccounts;
            get<T extends Xrm.Controls.Section>(name: string): T | null;
            get(name: string): Xrm.Controls.Section | null;
            get(): Xrm.Controls.Section[];
        }

        export type DETAILSTABCOMPANYPROFILEControlName =
            | "industrycode"
            | "ownershipcode"
            | "sic";

        export interface DETAILSTABCOMPANYPROFILE extends Xrm.Controls.Section {
            get(name: "industrycode"): Xrm.Controls.OptionSetControl;
            get(name: "ownershipcode"): Xrm.Controls.OptionSetControl;
            get(name: "sic"): Xrm.Controls.StringControl;
            get(name: DETAILSTABCOMPANYPROFILEControlName): T | null;
            get<T extends Xrm.Controls.Control>(name: DETAILSTABCOMPANYPROFILEControlName): T | null;
            get<T>(name: string): T | null;
            get(): Xrm.Controls.Control[];
        }

        export type DETAILSTABDETAILSTABSection6ControlName =
            | "description";

        export interface DETAILSTABDETAILSTABSection6 extends Xrm.Controls.Section {
            get(name: "description"): Xrm.Controls.StringControl;
            get(name: DETAILSTABDETAILSTABSection6ControlName): T | null;
            get<T extends Xrm.Controls.Control>(name: DETAILSTABDETAILSTABSection6ControlName): T | null;
            get<T>(name: string): T | null;
            get(): Xrm.Controls.Control[];
        }

        export type DETAILSTABCONTACTPREFERENCESControlName =
            | "donotbulkemail"
            | "donotemail"
            | "donotfax"
            | "donotphone"
            | "donotpostalmail"
            | "followemail"
            | "preferredcontactmethodcode";

        export interface DETAILSTABCONTACTPREFERENCES extends Xrm.Controls.Section {
            get(name: "donotbulkemail"): Xrm.Controls.OptionSetControl;
            get(name: "donotemail"): Xrm.Controls.OptionSetControl;
            get(name: "donotfax"): Xrm.Controls.OptionSetControl;
            get(name: "donotphone"): Xrm.Controls.OptionSetControl;
            get(name: "donotpostalmail"): Xrm.Controls.OptionSetControl;
            get(name: "followemail"): Xrm.Controls.OptionSetControl;
            get(name: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
            get(name: DETAILSTABCONTACTPREFERENCESControlName): T | null;
            get<T extends Xrm.Controls.Control>(name: DETAILSTABCONTACTPREFERENCESControlName): T | null;
            get<T>(name: string): T | null;
            get(): Xrm.Controls.Control[];
        }

        export type DETAILSTABBILLINGControlName =
            | "creditlimit"
            | "creditonhold"
            | "paymenttermscode"
            | "transactioncurrencyid";

        export interface DETAILSTABBILLING extends Xrm.Controls.Section {
            get(name: "creditlimit"): Xrm.Controls.NumberControl;
            get(name: "creditonhold"): Xrm.Controls.OptionSetControl;
            get(name: "paymenttermscode"): Xrm.Controls.OptionSetControl;
            get(name: "transactioncurrencyid"): Xrm.Controls.LookupControl;
            get(name: DETAILSTABBILLINGControlName): T | null;
            get<T extends Xrm.Controls.Control>(name: DETAILSTABBILLINGControlName): T | null;
            get<T>(name: string): T | null;
            get(): Xrm.Controls.Control[];
        }

        export type DETAILSTABSHIPPINGControlName =
            | "address1_freighttermscode"
            | "address1_shippingmethodcode";

        export interface DETAILSTABSHIPPING extends Xrm.Controls.Section {
            get(name: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
            get(name: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
            get(name: DETAILSTABSHIPPINGControlName): T | null;
            get<T extends Xrm.Controls.Control>(name: DETAILSTABSHIPPINGControlName): T | null;
            get<T>(name: string): T | null;
            get(): Xrm.Controls.Control[];
        }

        export type DETAILSTABChildAccountsControlName =
            | "ChildAccounts";

        export interface DETAILSTABChildAccounts extends Xrm.Controls.Section {
            get(name: "ChildAccounts"): Xrm.Controls.GridControl;
            get(name: DETAILSTABChildAccountsControlName): T | null;
            get<T extends Xrm.Controls.Control>(name: DETAILSTABChildAccountsControlName): T | null;
            get<T>(name: string): T | null;
            get(): Xrm.Controls.Control[];
        }
        
        export interface SUMMARYTAB extends Xrm.Controls.Tab {
            sections: SUMMARYTABSections;
        }
        
        export interface SUMMARYTABSections extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
            get(name: "ACCOUNT_INFORMATION"): SUMMARYTABACCOUNTINFORMATION;
            get(name: "ADDRESS"): SUMMARYTABADDRESS;
            get(name: "MapSection"): SUMMARYTABMapSection;
            get(name: "SOCIAL_PANE_TAB"): SUMMARYTABSOCIALPANETAB;
            get(name: "Summary_section_6"): SUMMARYTABSummarySection6;
            get(name: "SUMMARY_TAB_section_6"): SUMMARYTABSUMMARYTABSection6;
            get<T extends Xrm.Controls.Section>(name: string): T | null;
            get(name: string): Xrm.Controls.Section | null;
            get(): Xrm.Controls.Section[];
        }

        export type SUMMARYTABACCOUNTINFORMATIONControlName =
            | "fax"
            | "name"
            | "parentaccountid"
            | "telephone1"
            | "tickersymbol"
            | "websiteurl";

        export interface SUMMARYTABACCOUNTINFORMATION extends Xrm.Controls.Section {
            get(name: "fax"): Xrm.Controls.StringControl;
            get(name: "name"): Xrm.Controls.StringControl;
            get(name: "parentaccountid"): Xrm.Controls.LookupControl;
            get(name: "telephone1"): Xrm.Controls.StringControl;
            get(name: "tickersymbol"): Xrm.Controls.StandardControl;
            get(name: "websiteurl"): Xrm.Controls.StringControl;
            get(name: SUMMARYTABACCOUNTINFORMATIONControlName): T | null;
            get<T extends Xrm.Controls.Control>(name: SUMMARYTABACCOUNTINFORMATIONControlName): T | null;
            get<T>(name: string): T | null;
            get(): Xrm.Controls.Control[];
        }

        export type SUMMARYTABADDRESSControlName =
            | "address1_composite";

        export interface SUMMARYTABADDRESS extends Xrm.Controls.Section {
            get(name: "address1_composite"): Xrm.Controls.StringControl;
            get(name: SUMMARYTABADDRESSControlName): T | null;
            get<T extends Xrm.Controls.Control>(name: SUMMARYTABADDRESSControlName): T | null;
            get<T>(name: string): T | null;
            get(): Xrm.Controls.Control[];
        }

        export type SUMMARYTABMapSectionControlName =
            | "mapcontrol";

        export interface SUMMARYTABMapSection extends Xrm.Controls.Section {
            get(name: "mapcontrol"): Xrm.Controls.StandardControl;
            get(name: SUMMARYTABMapSectionControlName): T | null;
            get<T extends Xrm.Controls.Control>(name: SUMMARYTABMapSectionControlName): T | null;
            get<T>(name: string): T | null;
            get(): Xrm.Controls.Control[];
        }

        export type SUMMARYTABSOCIALPANETABControlName =
            | "notescontrol";

        export interface SUMMARYTABSOCIALPANETAB extends Xrm.Controls.Section {
            get(name: "notescontrol"): Xrm.Controls.StringControl;
            get(name: SUMMARYTABSOCIALPANETABControlName): T | null;
            get<T extends Xrm.Controls.Control>(name: SUMMARYTABSOCIALPANETABControlName): T | null;
            get<T>(name: string): T | null;
            get(): Xrm.Controls.Control[];
        }

        export type SUMMARYTABSummarySection6ControlName =
            | "ActionCards";

        export interface SUMMARYTABSummarySection6 extends Xrm.Controls.Section {
            get(name: "ActionCards"): Xrm.Controls.StandardControl;
            get(name: SUMMARYTABSummarySection6ControlName): T | null;
            get<T extends Xrm.Controls.Control>(name: SUMMARYTABSummarySection6ControlName): T | null;
            get<T>(name: string): T | null;
            get(): Xrm.Controls.Control[];
        }

        export type SUMMARYTABSUMMARYTABSection6ControlName =
            | "contactquickform"
            | "Contacts"
            | "primarycontactid";

        export interface SUMMARYTABSUMMARYTABSection6 extends Xrm.Controls.Section {
            get(name: "contactquickform"): Xrm.Controls.QuickFormControl;
            get(name: "Contacts"): Xrm.Controls.GridControl;
            get(name: "primarycontactid"): Xrm.Controls.LookupControl;
            get(name: SUMMARYTABSUMMARYTABSection6ControlName): T | null;
            get<T extends Xrm.Controls.Control>(name: SUMMARYTABSUMMARYTABSection6ControlName): T | null;
            get<T>(name: string): T | null;
            get(): Xrm.Controls.Control[];
        }

        export type QuickFormControlNames =
            | "contactquickform";

        export interface QuickForms extends Xrm.Collection.ItemCollection<Xrm.Controls.QuickFormControl> {
            get(name: "contactquickform"): Xrm.Controls.QuickFormControl;
            get(name: QuickFormControlNames): Xrm.Controls.QuickFormControl | null;
            get<T extends Xrm.Controls.QuickFormControl>(name: QuickFormControlNames): T | null;
            get<T>(name: string): T | null;
            get(): Xrm.Controls.QuickFormControl[];
        }
    }
}
