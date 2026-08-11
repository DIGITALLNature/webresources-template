// Automatically generated typings file https://github.com/DIGITALLNature/DigitallPower
/* eslint-disable */

declare namespace Xrm.Events {
    export interface EventContext {
        getFormContext<AccountFormContext>(): AccountFormContext;
    }
}

declare namespace XrmTable.Account {
    export interface FormContext extends Xrm.FormContext {
        getAttribute():  Xrm.Attributes.Attribute<Xrm.Attributes.AttributeValues>[];
        getControl(): Xrm.Controls.Control[];
        getAttribute(name: "accountcategorycode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "accountcategorycode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "accountclassificationcode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "accountclassificationcode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "accountid"): Xrm.Attributes.Attribute;
        getControl(name: "accountid"): Xrm.Controls.Control;
        getAttribute(name: "accountnumber"): Xrm.Attributes.StringAttribute;
        getControl(name: "accountnumber"): Xrm.Controls.StringControl;
        getAttribute(name: "accountratingcode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "accountratingcode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "address1_addressid"): Xrm.Attributes.Attribute;
        getControl(name: "address1_addressid"): Xrm.Controls.Control;
        getAttribute(name: "address1_addresstypecode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "address1_addresstypecode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "address1_city"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_city"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_composite"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_composite"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_country"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_country"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_county"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_county"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_fax"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_fax"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_freighttermscode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "address1_latitude"): Xrm.Attributes.NumberAttribute;
        getControl(name: "address1_latitude"): Xrm.Controls.NumberControl;
        getAttribute(name: "address1_line1"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_line1"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_line2"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_line2"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_line3"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_line3"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_longitude"): Xrm.Attributes.NumberAttribute;
        getControl(name: "address1_longitude"): Xrm.Controls.NumberControl;
        getAttribute(name: "address1_name"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_name"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_postalcode"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_postalcode"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_postofficebox"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_postofficebox"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_primarycontactname"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_primarycontactname"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_shippingmethodcode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "address1_stateorprovince"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_stateorprovince"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_telephone1"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_telephone1"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_telephone2"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_telephone2"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_telephone3"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_telephone3"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_upszone"): Xrm.Attributes.StringAttribute;
        getControl(name: "address1_upszone"): Xrm.Controls.StringControl;
        getAttribute(name: "address1_utcoffset"): Xrm.Attributes.NumberAttribute;
        getControl(name: "address1_utcoffset"): Xrm.Controls.NumberControl;
        getAttribute(name: "address2_addressid"): Xrm.Attributes.Attribute;
        getControl(name: "address2_addressid"): Xrm.Controls.Control;
        getAttribute(name: "address2_addresstypecode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "address2_addresstypecode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "address2_city"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_city"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_composite"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_composite"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_country"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_country"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_county"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_county"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_fax"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_fax"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_freighttermscode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "address2_freighttermscode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "address2_latitude"): Xrm.Attributes.NumberAttribute;
        getControl(name: "address2_latitude"): Xrm.Controls.NumberControl;
        getAttribute(name: "address2_line1"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_line1"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_line2"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_line2"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_line3"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_line3"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_longitude"): Xrm.Attributes.NumberAttribute;
        getControl(name: "address2_longitude"): Xrm.Controls.NumberControl;
        getAttribute(name: "address2_name"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_name"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_postalcode"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_postalcode"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_postofficebox"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_postofficebox"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_primarycontactname"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_primarycontactname"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_shippingmethodcode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "address2_shippingmethodcode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "address2_stateorprovince"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_stateorprovince"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_telephone1"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_telephone1"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_telephone2"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_telephone2"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_telephone3"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_telephone3"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_upszone"): Xrm.Attributes.StringAttribute;
        getControl(name: "address2_upszone"): Xrm.Controls.StringControl;
        getAttribute(name: "address2_utcoffset"): Xrm.Attributes.NumberAttribute;
        getControl(name: "address2_utcoffset"): Xrm.Controls.NumberControl;
        getAttribute(name: "adx_createdbyipaddress"): Xrm.Attributes.StringAttribute;
        getControl(name: "adx_createdbyipaddress"): Xrm.Controls.StringControl;
        getAttribute(name: "adx_createdbyusername"): Xrm.Attributes.StringAttribute;
        getControl(name: "adx_createdbyusername"): Xrm.Controls.StringControl;
        getAttribute(name: "adx_modifiedbyipaddress"): Xrm.Attributes.StringAttribute;
        getControl(name: "adx_modifiedbyipaddress"): Xrm.Controls.StringControl;
        getAttribute(name: "adx_modifiedbyusername"): Xrm.Attributes.StringAttribute;
        getControl(name: "adx_modifiedbyusername"): Xrm.Controls.StringControl;
        getAttribute(name: "aging30"): Xrm.Attributes.NumberAttribute;
        getControl(name: "aging30"): Xrm.Controls.NumberControl;
        getAttribute(name: "aging30_base"): Xrm.Attributes.NumberAttribute;
        getControl(name: "aging30_base"): Xrm.Controls.NumberControl;
        getAttribute(name: "aging60"): Xrm.Attributes.NumberAttribute;
        getControl(name: "aging60"): Xrm.Controls.NumberControl;
        getAttribute(name: "aging60_base"): Xrm.Attributes.NumberAttribute;
        getControl(name: "aging60_base"): Xrm.Controls.NumberControl;
        getAttribute(name: "aging90"): Xrm.Attributes.NumberAttribute;
        getControl(name: "aging90"): Xrm.Controls.NumberControl;
        getAttribute(name: "aging90_base"): Xrm.Attributes.NumberAttribute;
        getControl(name: "aging90_base"): Xrm.Controls.NumberControl;
        getAttribute(name: "businesstypecode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "businesstypecode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "createdby"): Xrm.Attributes.LookupAttribute;
        getControl(name: "createdby"): Xrm.Controls.LookupControl;
        getAttribute(name: "createdbyexternalparty"): Xrm.Attributes.LookupAttribute;
        getControl(name: "createdbyexternalparty"): Xrm.Controls.LookupControl;
        getAttribute(name: "createdon"): Xrm.Attributes.DateAttribute;
        getControl(name: "createdon"): Xrm.Controls.DateControl;
        getAttribute(name: "createdonbehalfby"): Xrm.Attributes.LookupAttribute;
        getControl(name: "createdonbehalfby"): Xrm.Controls.LookupControl;
        getAttribute(name: "creditlimit"): Xrm.Attributes.NumberAttribute;
        getControl(name: "creditlimit"): Xrm.Controls.NumberControl;
        getAttribute(name: "creditlimit_base"): Xrm.Attributes.NumberAttribute;
        getControl(name: "creditlimit_base"): Xrm.Controls.NumberControl;
        getAttribute(name: "creditonhold"): Xrm.Attributes.BooleanAttribute;
        getControl(name: "creditonhold"): Xrm.Controls.BooleanControl;
        getAttribute(name: "customersizecode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "customersizecode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "customertypecode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "customertypecode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "description"): Xrm.Attributes.StringAttribute;
        getControl(name: "description"): Xrm.Controls.StringControl;
        getAttribute(name: "donotbulkemail"): Xrm.Attributes.BooleanAttribute;
        getControl(name: "donotbulkemail"): Xrm.Controls.BooleanControl;
        getAttribute(name: "donotbulkpostalmail"): Xrm.Attributes.BooleanAttribute;
        getControl(name: "donotbulkpostalmail"): Xrm.Controls.BooleanControl;
        getAttribute(name: "donotemail"): Xrm.Attributes.BooleanAttribute;
        getControl(name: "donotemail"): Xrm.Controls.BooleanControl;
        getAttribute(name: "donotfax"): Xrm.Attributes.BooleanAttribute;
        getControl(name: "donotfax"): Xrm.Controls.BooleanControl;
        getAttribute(name: "donotphone"): Xrm.Attributes.BooleanAttribute;
        getControl(name: "donotphone"): Xrm.Controls.BooleanControl;
        getAttribute(name: "donotpostalmail"): Xrm.Attributes.BooleanAttribute;
        getControl(name: "donotpostalmail"): Xrm.Controls.BooleanControl;
        getAttribute(name: "donotsendmm"): Xrm.Attributes.BooleanAttribute;
        getControl(name: "donotsendmm"): Xrm.Controls.BooleanControl;
        getAttribute(name: "emailaddress1"): Xrm.Attributes.StringAttribute;
        getControl(name: "emailaddress1"): Xrm.Controls.StringControl;
        getAttribute(name: "emailaddress2"): Xrm.Attributes.StringAttribute;
        getControl(name: "emailaddress2"): Xrm.Controls.StringControl;
        getAttribute(name: "emailaddress3"): Xrm.Attributes.StringAttribute;
        getControl(name: "emailaddress3"): Xrm.Controls.StringControl;
        getAttribute(name: "exchangerate"): Xrm.Attributes.NumberAttribute;
        getControl(name: "exchangerate"): Xrm.Controls.NumberControl;
        getAttribute(name: "fax"): Xrm.Attributes.StringAttribute;
        getControl(name: "fax"): Xrm.Controls.StringControl;
        getAttribute(name: "followemail"): Xrm.Attributes.BooleanAttribute;
        getControl(name: "followemail"): Xrm.Controls.BooleanControl;
        getAttribute(name: "ftpsiteurl"): Xrm.Attributes.StringAttribute;
        getControl(name: "ftpsiteurl"): Xrm.Controls.StringControl;
        getAttribute(name: "importsequencenumber"): Xrm.Attributes.NumberAttribute;
        getControl(name: "importsequencenumber"): Xrm.Controls.NumberControl;
        getAttribute(name: "industrycode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "industrycode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "lastonholdtime"): Xrm.Attributes.DateAttribute;
        getControl(name: "lastonholdtime"): Xrm.Controls.DateControl;
        getAttribute(name: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
        getControl(name: "lastusedincampaign"): Xrm.Controls.DateControl;
        getAttribute(name: "marketcap"): Xrm.Attributes.NumberAttribute;
        getControl(name: "marketcap"): Xrm.Controls.NumberControl;
        getAttribute(name: "marketcap_base"): Xrm.Attributes.NumberAttribute;
        getControl(name: "marketcap_base"): Xrm.Controls.NumberControl;
        getAttribute(name: "marketingonly"): Xrm.Attributes.BooleanAttribute;
        getControl(name: "marketingonly"): Xrm.Controls.BooleanControl;
        getAttribute(name: "masterid"): Xrm.Attributes.LookupAttribute;
        getControl(name: "masterid"): Xrm.Controls.LookupControl;
        getAttribute(name: "merged"): Xrm.Attributes.BooleanAttribute;
        getControl(name: "merged"): Xrm.Controls.BooleanControl;
        getAttribute(name: "modifiedby"): Xrm.Attributes.LookupAttribute;
        getControl(name: "modifiedby"): Xrm.Controls.LookupControl;
        getAttribute(name: "modifiedbyexternalparty"): Xrm.Attributes.LookupAttribute;
        getControl(name: "modifiedbyexternalparty"): Xrm.Controls.LookupControl;
        getAttribute(name: "modifiedon"): Xrm.Attributes.DateAttribute;
        getControl(name: "modifiedon"): Xrm.Controls.DateControl;
        getAttribute(name: "modifiedonbehalfby"): Xrm.Attributes.LookupAttribute;
        getControl(name: "modifiedonbehalfby"): Xrm.Controls.LookupControl;
        getAttribute(name: "msa_managingpartnerid"): Xrm.Attributes.LookupAttribute;
        getControl(name: "msa_managingpartnerid"): Xrm.Controls.LookupControl;
        getAttribute(name: "name"): Xrm.Attributes.StringAttribute;
        getControl(name: "name"): Xrm.Controls.StringControl;
        getAttribute(name: "numberofemployees"): Xrm.Attributes.NumberAttribute;
        getControl(name: "numberofemployees"): Xrm.Controls.NumberControl;
        getAttribute(name: "onholdtime"): Xrm.Attributes.NumberAttribute;
        getControl(name: "onholdtime"): Xrm.Controls.NumberControl;
        getAttribute(name: "overriddencreatedon"): Xrm.Attributes.DateAttribute;
        getControl(name: "overriddencreatedon"): Xrm.Controls.DateControl;
        getAttribute(name: "ownerid"): Xrm.Attributes.LookupAttribute;
        getControl(name: "ownerid"): Xrm.Controls.LookupControl;
        getAttribute(name: "ownershipcode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "ownershipcode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "owningbusinessunit"): Xrm.Attributes.LookupAttribute;
        getControl(name: "owningbusinessunit"): Xrm.Controls.LookupControl;
        getAttribute(name: "owningteam"): Xrm.Attributes.LookupAttribute;
        getControl(name: "owningteam"): Xrm.Controls.LookupControl;
        getAttribute(name: "owninguser"): Xrm.Attributes.LookupAttribute;
        getControl(name: "owninguser"): Xrm.Controls.LookupControl;
        getAttribute(name: "parentaccountid"): Xrm.Attributes.LookupAttribute;
        getControl(name: "parentaccountid"): Xrm.Controls.LookupControl;
        getAttribute(name: "participatesinworkflow"): Xrm.Attributes.BooleanAttribute;
        getControl(name: "participatesinworkflow"): Xrm.Controls.BooleanControl;
        getAttribute(name: "paymenttermscode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "paymenttermscode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "preferredappointmentdaycode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "preferredappointmentdaycode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "preferredappointmenttimecode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "preferredappointmenttimecode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "preferredcontactmethodcode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "preferredsystemuserid"): Xrm.Attributes.LookupAttribute;
        getControl(name: "preferredsystemuserid"): Xrm.Controls.LookupControl;
        getAttribute(name: "primarycontactid"): Xrm.Attributes.LookupAttribute;
        getControl(name: "primarycontactid"): Xrm.Controls.LookupControl;
        getAttribute(name: "primarysatoriid"): Xrm.Attributes.StringAttribute;
        getControl(name: "primarysatoriid"): Xrm.Controls.StringControl;
        getAttribute(name: "primarytwitterid"): Xrm.Attributes.StringAttribute;
        getControl(name: "primarytwitterid"): Xrm.Controls.StringControl;
        getAttribute(name: "processid"): Xrm.Attributes.Attribute;
        getControl(name: "processid"): Xrm.Controls.Control;
        getAttribute(name: "revenue"): Xrm.Attributes.NumberAttribute;
        getControl(name: "revenue"): Xrm.Controls.NumberControl;
        getAttribute(name: "revenue_base"): Xrm.Attributes.NumberAttribute;
        getControl(name: "revenue_base"): Xrm.Controls.NumberControl;
        getAttribute(name: "sharesoutstanding"): Xrm.Attributes.NumberAttribute;
        getControl(name: "sharesoutstanding"): Xrm.Controls.NumberControl;
        getAttribute(name: "shippingmethodcode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "shippingmethodcode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "sic"): Xrm.Attributes.StringAttribute;
        getControl(name: "sic"): Xrm.Controls.StringControl;
        getAttribute(name: "slaid"): Xrm.Attributes.LookupAttribute;
        getControl(name: "slaid"): Xrm.Controls.LookupControl;
        getAttribute(name: "slainvokedid"): Xrm.Attributes.LookupAttribute;
        getControl(name: "slainvokedid"): Xrm.Controls.LookupControl;
        getAttribute(name: "stageid"): Xrm.Attributes.Attribute;
        getControl(name: "stageid"): Xrm.Controls.Control;
        getAttribute(name: "statecode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "statecode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "statuscode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "statuscode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "stockexchange"): Xrm.Attributes.StringAttribute;
        getControl(name: "stockexchange"): Xrm.Controls.StringControl;
        getAttribute(name: "telephone1"): Xrm.Attributes.StringAttribute;
        getControl(name: "telephone1"): Xrm.Controls.StringControl;
        getAttribute(name: "telephone2"): Xrm.Attributes.StringAttribute;
        getControl(name: "telephone2"): Xrm.Controls.StringControl;
        getAttribute(name: "telephone3"): Xrm.Attributes.StringAttribute;
        getControl(name: "telephone3"): Xrm.Controls.StringControl;
        getAttribute(name: "territorycode"): Xrm.Attributes.OptionSetAttribute;
        getControl(name: "territorycode"): Xrm.Controls.OptionSetControl;
        getAttribute(name: "tickersymbol"): Xrm.Attributes.StringAttribute;
        getControl(name: "tickersymbol"): Xrm.Controls.StringControl;
        getAttribute(name: "timespentbymeonemailandmeetings"): Xrm.Attributes.StringAttribute;
        getControl(name: "timespentbymeonemailandmeetings"): Xrm.Controls.StringControl;
        getAttribute(name: "timezoneruleversionnumber"): Xrm.Attributes.NumberAttribute;
        getControl(name: "timezoneruleversionnumber"): Xrm.Controls.NumberControl;
        getAttribute(name: "transactioncurrencyid"): Xrm.Attributes.LookupAttribute;
        getControl(name: "transactioncurrencyid"): Xrm.Controls.LookupControl;
        getAttribute(name: "traversedpath"): Xrm.Attributes.StringAttribute;
        getControl(name: "traversedpath"): Xrm.Controls.StringControl;
        getAttribute(name: "utcconversiontimezonecode"): Xrm.Attributes.NumberAttribute;
        getControl(name: "utcconversiontimezonecode"): Xrm.Controls.NumberControl;
        getAttribute(name: "versionnumber"): Xrm.Attributes.NumberAttribute;
        getControl(name: "versionnumber"): Xrm.Controls.NumberControl;
        getAttribute(name: "websiteurl"): Xrm.Attributes.StringAttribute;
        getControl(name: "websiteurl"): Xrm.Controls.StringControl;
        getAttribute(name: "yominame"): Xrm.Attributes.StringAttribute;
        getControl(name: "yominame"): Xrm.Controls.StringControl;
    }

    export const enum AttributeTypes {
        AccountCategoryCode =  "OptionSet",
        AccountClassificationCode =  "OptionSet",
        AccountId =  "Guid",
        AccountNumber =  "String",
        AccountRatingCode =  "OptionSet",
        Address1AddressId =  "Guid",
        Address1AddressTypeCode =  "OptionSet",
        Address1City =  "String",
        Address1Composite =  "String",
        Address1Country =  "String",
        Address1County =  "String",
        Address1Fax =  "String",
        Address1FreightTermsCode =  "OptionSet",
        Address1Latitude =  "Double",
        Address1Line1 =  "String",
        Address1Line2 =  "String",
        Address1Line3 =  "String",
        Address1Longitude =  "Double",
        Address1Name =  "String",
        Address1PostalCode =  "String",
        Address1PostOfficeBox =  "String",
        Address1PrimaryContactName =  "String",
        Address1ShippingMethodCode =  "OptionSet",
        Address1StateOrProvince =  "String",
        Address1Telephone1 =  "String",
        Address1Telephone2 =  "String",
        Address1Telephone3 =  "String",
        Address1UPSZone =  "String",
        Address1UTCOffset =  "Integer",
        Address2AddressId =  "Guid",
        Address2AddressTypeCode =  "OptionSet",
        Address2City =  "String",
        Address2Composite =  "String",
        Address2Country =  "String",
        Address2County =  "String",
        Address2Fax =  "String",
        Address2FreightTermsCode =  "OptionSet",
        Address2Latitude =  "Double",
        Address2Line1 =  "String",
        Address2Line2 =  "String",
        Address2Line3 =  "String",
        Address2Longitude =  "Double",
        Address2Name =  "String",
        Address2PostalCode =  "String",
        Address2PostOfficeBox =  "String",
        Address2PrimaryContactName =  "String",
        Address2ShippingMethodCode =  "OptionSet",
        Address2StateOrProvince =  "String",
        Address2Telephone1 =  "String",
        Address2Telephone2 =  "String",
        Address2Telephone3 =  "String",
        Address2UPSZone =  "String",
        Address2UTCOffset =  "Integer",
        AdxCreatedByIPAddress =  "String",
        AdxCreatedByUsername =  "String",
        AdxModifiedByIPAddress =  "String",
        AdxModifiedByUsername =  "String",
        Aging30 =  "Integer",
        Aging30Base =  "Integer",
        Aging60 =  "Integer",
        Aging60Base =  "Integer",
        Aging90 =  "Integer",
        Aging90Base =  "Integer",
        BusinessTypeCode =  "OptionSet",
        CreatedBy =  "Lookup",
        CreatedByExternalParty =  "Lookup",
        CreatedOn =  "DateAndTime:UserLocal",
        CreatedOnBehalfBy =  "Lookup",
        CreditLimit =  "Integer",
        CreditLimitBase =  "Integer",
        CreditOnHold =  "Boolean",
        CustomerSizeCode =  "OptionSet",
        CustomerTypeCode =  "OptionSet",
        Description =  "String",
        DoNotBulkEMail =  "Boolean",
        DoNotBulkPostalMail =  "Boolean",
        DoNotEMail =  "Boolean",
        DoNotFax =  "Boolean",
        DoNotPhone =  "Boolean",
        DoNotPostalMail =  "Boolean",
        DoNotSendMM =  "Boolean",
        EMailAddress1 =  "String",
        EMailAddress2 =  "String",
        EMailAddress3 =  "String",
        ExchangeRate =  "Decimal",
        Fax =  "String",
        FollowEmail =  "Boolean",
        FtpSiteURL =  "String",
        ImportSequenceNumber =  "Integer",
        IndustryCode =  "OptionSet",
        LastOnHoldTime =  "DateAndTime:UserLocal",
        LastUsedInCampaign =  "DateAndTime:UserLocal",
        MarketCap =  "Integer",
        MarketCapBase =  "Integer",
        MarketingOnly =  "Boolean",
        MasterId =  "Lookup",
        Merged =  "Boolean",
        ModifiedBy =  "Lookup",
        ModifiedByExternalParty =  "Lookup",
        ModifiedOn =  "DateAndTime:UserLocal",
        ModifiedOnBehalfBy =  "Lookup",
        MsaManagingpartnerid =  "Lookup",
        Name =  "String",
        NumberOfEmployees =  "Integer",
        OnHoldTime =  "Integer",
        OverriddenCreatedOn =  "DateAndTime:UserLocal",
        OwnerId =  "Lookup",
        OwnershipCode =  "OptionSet",
        OwningBusinessUnit =  "Lookup",
        OwningTeam =  "Lookup",
        OwningUser =  "Lookup",
        ParentAccountId =  "Lookup",
        ParticipatesInWorkflow =  "Boolean",
        PaymentTermsCode =  "OptionSet",
        PreferredAppointmentDayCode =  "OptionSet",
        PreferredAppointmentTimeCode =  "OptionSet",
        PreferredContactMethodCode =  "OptionSet",
        PreferredSystemUserId =  "Lookup",
        PrimaryContactId =  "Lookup",
        PrimarySatoriId =  "String",
        PrimaryTwitterId =  "String",
        ProcessId =  "Guid",
        Revenue =  "Integer",
        RevenueBase =  "Integer",
        SharesOutstanding =  "Integer",
        ShippingMethodCode =  "OptionSet",
        SIC =  "String",
        SLAId =  "Lookup",
        SLAInvokedId =  "Lookup",
        StageId =  "Guid",
        StateCode =  "OptionSet",
        StatusCode =  "OptionSet",
        StockExchange =  "String",
        Telephone1 =  "String",
        Telephone2 =  "String",
        Telephone3 =  "String",
        TerritoryCode =  "OptionSet",
        TickerSymbol =  "String",
        TimeSpentByMeOnEmailAndMeetings =  "String",
        TimeZoneRuleVersionNumber =  "Integer",
        TransactionCurrencyId =  "Lookup",
        TraversedPath =  "String",
        UTCConversionTimeZoneCode =  "Integer",
        VersionNumber =  "BigInt",
        WebSiteURL =  "String",
        YomiName =  "String",
    }

    export const enum LogicalNames {
        AccountCategoryCode =  "accountcategorycode",
        AccountClassificationCode =  "accountclassificationcode",
        AccountId =  "accountid",
        AccountNumber =  "accountnumber",
        AccountRatingCode =  "accountratingcode",
        Address1AddressId =  "address1_addressid",
        Address1AddressTypeCode =  "address1_addresstypecode",
        Address1City =  "address1_city",
        Address1Composite =  "address1_composite",
        Address1Country =  "address1_country",
        Address1County =  "address1_county",
        Address1Fax =  "address1_fax",
        Address1FreightTermsCode =  "address1_freighttermscode",
        Address1Latitude =  "address1_latitude",
        Address1Line1 =  "address1_line1",
        Address1Line2 =  "address1_line2",
        Address1Line3 =  "address1_line3",
        Address1Longitude =  "address1_longitude",
        Address1Name =  "address1_name",
        Address1PostalCode =  "address1_postalcode",
        Address1PostOfficeBox =  "address1_postofficebox",
        Address1PrimaryContactName =  "address1_primarycontactname",
        Address1ShippingMethodCode =  "address1_shippingmethodcode",
        Address1StateOrProvince =  "address1_stateorprovince",
        Address1Telephone1 =  "address1_telephone1",
        Address1Telephone2 =  "address1_telephone2",
        Address1Telephone3 =  "address1_telephone3",
        Address1UPSZone =  "address1_upszone",
        Address1UTCOffset =  "address1_utcoffset",
        Address2AddressId =  "address2_addressid",
        Address2AddressTypeCode =  "address2_addresstypecode",
        Address2City =  "address2_city",
        Address2Composite =  "address2_composite",
        Address2Country =  "address2_country",
        Address2County =  "address2_county",
        Address2Fax =  "address2_fax",
        Address2FreightTermsCode =  "address2_freighttermscode",
        Address2Latitude =  "address2_latitude",
        Address2Line1 =  "address2_line1",
        Address2Line2 =  "address2_line2",
        Address2Line3 =  "address2_line3",
        Address2Longitude =  "address2_longitude",
        Address2Name =  "address2_name",
        Address2PostalCode =  "address2_postalcode",
        Address2PostOfficeBox =  "address2_postofficebox",
        Address2PrimaryContactName =  "address2_primarycontactname",
        Address2ShippingMethodCode =  "address2_shippingmethodcode",
        Address2StateOrProvince =  "address2_stateorprovince",
        Address2Telephone1 =  "address2_telephone1",
        Address2Telephone2 =  "address2_telephone2",
        Address2Telephone3 =  "address2_telephone3",
        Address2UPSZone =  "address2_upszone",
        Address2UTCOffset =  "address2_utcoffset",
        AdxCreatedByIPAddress =  "adx_createdbyipaddress",
        AdxCreatedByUsername =  "adx_createdbyusername",
        AdxModifiedByIPAddress =  "adx_modifiedbyipaddress",
        AdxModifiedByUsername =  "adx_modifiedbyusername",
        Aging30 =  "aging30",
        Aging30Base =  "aging30_base",
        Aging60 =  "aging60",
        Aging60Base =  "aging60_base",
        Aging90 =  "aging90",
        Aging90Base =  "aging90_base",
        BusinessTypeCode =  "businesstypecode",
        CreatedBy =  "createdby",
        CreatedByExternalParty =  "createdbyexternalparty",
        CreatedOn =  "createdon",
        CreatedOnBehalfBy =  "createdonbehalfby",
        CreditLimit =  "creditlimit",
        CreditLimitBase =  "creditlimit_base",
        CreditOnHold =  "creditonhold",
        CustomerSizeCode =  "customersizecode",
        CustomerTypeCode =  "customertypecode",
        Description =  "description",
        DoNotBulkEMail =  "donotbulkemail",
        DoNotBulkPostalMail =  "donotbulkpostalmail",
        DoNotEMail =  "donotemail",
        DoNotFax =  "donotfax",
        DoNotPhone =  "donotphone",
        DoNotPostalMail =  "donotpostalmail",
        DoNotSendMM =  "donotsendmm",
        EMailAddress1 =  "emailaddress1",
        EMailAddress2 =  "emailaddress2",
        EMailAddress3 =  "emailaddress3",
        ExchangeRate =  "exchangerate",
        Fax =  "fax",
        FollowEmail =  "followemail",
        FtpSiteURL =  "ftpsiteurl",
        ImportSequenceNumber =  "importsequencenumber",
        IndustryCode =  "industrycode",
        LastOnHoldTime =  "lastonholdtime",
        LastUsedInCampaign =  "lastusedincampaign",
        MarketCap =  "marketcap",
        MarketCapBase =  "marketcap_base",
        MarketingOnly =  "marketingonly",
        MasterId =  "masterid",
        Merged =  "merged",
        ModifiedBy =  "modifiedby",
        ModifiedByExternalParty =  "modifiedbyexternalparty",
        ModifiedOn =  "modifiedon",
        ModifiedOnBehalfBy =  "modifiedonbehalfby",
        MsaManagingpartnerid =  "msa_managingpartnerid",
        Name =  "name",
        NumberOfEmployees =  "numberofemployees",
        OnHoldTime =  "onholdtime",
        OverriddenCreatedOn =  "overriddencreatedon",
        OwnerId =  "ownerid",
        OwnershipCode =  "ownershipcode",
        OwningBusinessUnit =  "owningbusinessunit",
        OwningTeam =  "owningteam",
        OwningUser =  "owninguser",
        ParentAccountId =  "parentaccountid",
        ParticipatesInWorkflow =  "participatesinworkflow",
        PaymentTermsCode =  "paymenttermscode",
        PreferredAppointmentDayCode =  "preferredappointmentdaycode",
        PreferredAppointmentTimeCode =  "preferredappointmenttimecode",
        PreferredContactMethodCode =  "preferredcontactmethodcode",
        PreferredSystemUserId =  "preferredsystemuserid",
        PrimaryContactId =  "primarycontactid",
        PrimarySatoriId =  "primarysatoriid",
        PrimaryTwitterId =  "primarytwitterid",
        ProcessId =  "processid",
        Revenue =  "revenue",
        RevenueBase =  "revenue_base",
        SharesOutstanding =  "sharesoutstanding",
        ShippingMethodCode =  "shippingmethodcode",
        SIC =  "sic",
        SLAId =  "slaid",
        SLAInvokedId =  "slainvokedid",
        StageId =  "stageid",
        StateCode =  "statecode",
        StatusCode =  "statuscode",
        StockExchange =  "stockexchange",
        Telephone1 =  "telephone1",
        Telephone2 =  "telephone2",
        Telephone3 =  "telephone3",
        TerritoryCode =  "territorycode",
        TickerSymbol =  "tickersymbol",
        TimeSpentByMeOnEmailAndMeetings =  "timespentbymeonemailandmeetings",
        TimeZoneRuleVersionNumber =  "timezoneruleversionnumber",
        TransactionCurrencyId =  "transactioncurrencyid",
        TraversedPath =  "traversedpath",
        UTCConversionTimeZoneCode =  "utcconversiontimezonecode",
        VersionNumber =  "versionnumber",
        WebSiteURL =  "websiteurl",
        YomiName =  "yominame",
    }

    export const enum Entity {
        LogicalName = "account",
    }

    export interface DTO extends XrmTable.DTO.TableFields<LogicalNames> {
        accountcategorycode?: number;
        "accountcategorycode@OData.Community.Display.V1.FormattedValue"?: string;
        accountclassificationcode?: number;
        "accountclassificationcode@OData.Community.Display.V1.FormattedValue"?: string;
        accountid?: string;
        accountnumber?: string;
        accountratingcode?: number;
        "accountratingcode@OData.Community.Display.V1.FormattedValue"?: string;
        address1_addressid?: string;
        address1_addresstypecode?: number;
        "address1_addresstypecode@OData.Community.Display.V1.FormattedValue"?: string;
        address1_city?: string;
        address1_composite?: string;
        address1_country?: string;
        address1_county?: string;
        address1_fax?: string;
        address1_freighttermscode?: number;
        "address1_freighttermscode@OData.Community.Display.V1.FormattedValue"?: string;
        address1_latitude?: number;
        address1_line1?: string;
        address1_line2?: string;
        address1_line3?: string;
        address1_longitude?: number;
        address1_name?: string;
        address1_postalcode?: string;
        address1_postofficebox?: string;
        address1_primarycontactname?: string;
        address1_shippingmethodcode?: number;
        "address1_shippingmethodcode@OData.Community.Display.V1.FormattedValue"?: string;
        address1_stateorprovince?: string;
        address1_telephone1?: string;
        address1_telephone2?: string;
        address1_telephone3?: string;
        address1_upszone?: string;
        address1_utcoffset?: number;
        address2_addressid?: string;
        address2_addresstypecode?: number;
        "address2_addresstypecode@OData.Community.Display.V1.FormattedValue"?: string;
        address2_city?: string;
        address2_composite?: string;
        address2_country?: string;
        address2_county?: string;
        address2_fax?: string;
        address2_freighttermscode?: number;
        "address2_freighttermscode@OData.Community.Display.V1.FormattedValue"?: string;
        address2_latitude?: number;
        address2_line1?: string;
        address2_line2?: string;
        address2_line3?: string;
        address2_longitude?: number;
        address2_name?: string;
        address2_postalcode?: string;
        address2_postofficebox?: string;
        address2_primarycontactname?: string;
        address2_shippingmethodcode?: number;
        "address2_shippingmethodcode@OData.Community.Display.V1.FormattedValue"?: string;
        address2_stateorprovince?: string;
        address2_telephone1?: string;
        address2_telephone2?: string;
        address2_telephone3?: string;
        address2_upszone?: string;
        address2_utcoffset?: number;
        adx_createdbyipaddress?: string;
        adx_createdbyusername?: string;
        adx_modifiedbyipaddress?: string;
        adx_modifiedbyusername?: string;
        aging30?: number;
        aging30_base?: number;
        aging60?: number;
        aging60_base?: number;
        aging90?: number;
        aging90_base?: number;
        businesstypecode?: number;
        "businesstypecode@OData.Community.Display.V1.FormattedValue"?: string;
        "_createdby_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_createdby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_createdby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _createdby_value?: string;
        createdby?: any;
        "createdby@odata.bind"?: string | null;
        "_createdbyexternalparty_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_createdbyexternalparty_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_createdbyexternalparty_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _createdbyexternalparty_value?: string;
        createdbyexternalparty?: any;
        "createdbyexternalparty@odata.bind"?: string | null;
        createdon?: string;
        "_createdonbehalfby_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_createdonbehalfby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_createdonbehalfby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _createdonbehalfby_value?: string;
        createdonbehalfby?: any;
        "createdonbehalfby@odata.bind"?: string | null;
        creditlimit?: number;
        creditlimit_base?: number;
        creditonhold?: boolean;
        customersizecode?: number;
        "customersizecode@OData.Community.Display.V1.FormattedValue"?: string;
        customertypecode?: number;
        "customertypecode@OData.Community.Display.V1.FormattedValue"?: string;
        description?: string;
        donotbulkemail?: boolean;
        donotbulkpostalmail?: boolean;
        donotemail?: boolean;
        donotfax?: boolean;
        donotphone?: boolean;
        donotpostalmail?: boolean;
        donotsendmm?: boolean;
        emailaddress1?: string;
        emailaddress2?: string;
        emailaddress3?: string;
        exchangerate?: number;
        fax?: string;
        followemail?: boolean;
        ftpsiteurl?: string;
        importsequencenumber?: number;
        industrycode?: number;
        "industrycode@OData.Community.Display.V1.FormattedValue"?: string;
        lastonholdtime?: string;
        lastusedincampaign?: string;
        marketcap?: number;
        marketcap_base?: number;
        marketingonly?: boolean;
        "_masterid_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_masterid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_masterid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _masterid_value?: string;
        masterid?: any;
        "masterid@odata.bind"?: string | null;
        merged?: boolean;
        "_modifiedby_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_modifiedby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_modifiedby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _modifiedby_value?: string;
        modifiedby?: any;
        "modifiedby@odata.bind"?: string | null;
        "_modifiedbyexternalparty_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_modifiedbyexternalparty_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_modifiedbyexternalparty_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _modifiedbyexternalparty_value?: string;
        modifiedbyexternalparty?: any;
        "modifiedbyexternalparty@odata.bind"?: string | null;
        modifiedon?: string;
        "_modifiedonbehalfby_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_modifiedonbehalfby_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_modifiedonbehalfby_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _modifiedonbehalfby_value?: string;
        modifiedonbehalfby?: any;
        "modifiedonbehalfby@odata.bind"?: string | null;
        "_msa_managingpartnerid_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_msa_managingpartnerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_msa_managingpartnerid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _msa_managingpartnerid_value?: string;
        msa_managingpartnerid?: any;
        "msa_managingpartnerid@odata.bind"?: string | null;
        name?: string;
        numberofemployees?: number;
        onholdtime?: number;
        overriddencreatedon?: string;
        "_ownerid_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _ownerid_value?: string;
        ownerid?: any;
        "ownerid@odata.bind"?: string | null;
        ownershipcode?: number;
        "ownershipcode@OData.Community.Display.V1.FormattedValue"?: string;
        "_owningbusinessunit_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_owningbusinessunit_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_owningbusinessunit_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _owningbusinessunit_value?: string;
        owningbusinessunit?: any;
        "owningbusinessunit@odata.bind"?: string | null;
        "_owningteam_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_owningteam_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_owningteam_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _owningteam_value?: string;
        owningteam?: any;
        "owningteam@odata.bind"?: string | null;
        "_owninguser_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_owninguser_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_owninguser_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _owninguser_value?: string;
        owninguser?: any;
        "owninguser@odata.bind"?: string | null;
        "_parentaccountid_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_parentaccountid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_parentaccountid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _parentaccountid_value?: string;
        parentaccountid?: any;
        "parentaccountid@odata.bind"?: string | null;
        participatesinworkflow?: boolean;
        paymenttermscode?: number;
        "paymenttermscode@OData.Community.Display.V1.FormattedValue"?: string;
        preferredappointmentdaycode?: number;
        "preferredappointmentdaycode@OData.Community.Display.V1.FormattedValue"?: string;
        preferredappointmenttimecode?: number;
        "preferredappointmenttimecode@OData.Community.Display.V1.FormattedValue"?: string;
        preferredcontactmethodcode?: number;
        "preferredcontactmethodcode@OData.Community.Display.V1.FormattedValue"?: string;
        "_preferredsystemuserid_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_preferredsystemuserid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_preferredsystemuserid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _preferredsystemuserid_value?: string;
        preferredsystemuserid?: any;
        "preferredsystemuserid@odata.bind"?: string | null;
        "_primarycontactid_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_primarycontactid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_primarycontactid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _primarycontactid_value?: string;
        primarycontactid?: any;
        "primarycontactid@odata.bind"?: string | null;
        primarysatoriid?: string;
        primarytwitterid?: string;
        processid?: string;
        revenue?: number;
        revenue_base?: number;
        sharesoutstanding?: number;
        shippingmethodcode?: number;
        "shippingmethodcode@OData.Community.Display.V1.FormattedValue"?: string;
        sic?: string;
        "_slaid_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_slaid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_slaid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _slaid_value?: string;
        slaid?: any;
        "slaid@odata.bind"?: string | null;
        "_slainvokedid_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_slainvokedid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_slainvokedid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _slainvokedid_value?: string;
        slainvokedid?: any;
        "slainvokedid@odata.bind"?: string | null;
        stageid?: string;
        statecode?: number;
        "statecode@OData.Community.Display.V1.FormattedValue"?: string;
        statuscode?: number;
        "statuscode@OData.Community.Display.V1.FormattedValue"?: string;
        stockexchange?: string;
        telephone1?: string;
        telephone2?: string;
        telephone3?: string;
        territorycode?: number;
        "territorycode@OData.Community.Display.V1.FormattedValue"?: string;
        tickersymbol?: string;
        timespentbymeonemailandmeetings?: string;
        timezoneruleversionnumber?: number;
        "_transactioncurrencyid_value@OData.Community.Display.V1.FormattedValue"?: string;
        "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty"?: string;
        "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.lookuplogicalname"?: string;
        _transactioncurrencyid_value?: string;
        transactioncurrencyid?: any;
        "transactioncurrencyid@odata.bind"?: string | null;
        traversedpath?: string;
        utcconversiontimezonecode?: number;
        versionnumber?: number;
        websiteurl?: string;
        yominame?: string;
    }

    namespace Options {
    
        export const enum AccountCategoryCode {
            PreferredCustomer =  1,
            Standard =  2,
        }
        export const enum AccountClassificationCode {
            DefaultValue =  1,
        }
        export const enum AccountRatingCode {
            DefaultValue =  1,
        }
        export const enum Address1AddressTypeCode {
            BillTo =  1,
            ShipTo =  2,
            Primary =  3,
            Other =  4,
        }
        export const enum Address1FreightTermsCode {
            FOB =  1,
            NoCharge =  2,
        }
        export const enum Address1ShippingMethodCode {
            Airborne =  1,
            DHL =  2,
            FedEx =  3,
            UPS =  4,
            PostalMail =  5,
            FullLoad =  6,
            WillCall =  7,
        }
        export const enum Address2AddressTypeCode {
            DefaultValue =  1,
        }
        export const enum Address2FreightTermsCode {
            DefaultValue =  1,
        }
        export const enum Address2ShippingMethodCode {
            DefaultValue =  1,
        }
        export const enum BusinessTypeCode {
            DefaultValue =  1,
        }
        export const enum CustomerSizeCode {
            DefaultValue =  1,
        }
        export const enum CustomerTypeCode {
            Competitor =  1,
            Consultant =  2,
            Customer =  3,
            Investor =  4,
            Partner =  5,
            Influencer =  6,
            Press =  7,
            Prospect =  8,
            Reseller =  9,
            Supplier =  10,
            Vendor =  11,
            Other =  12,
        }
        export const enum IndustryCode {
            Accounting =  1,
            AgricultureAndNonPetrolNaturalResourceExtraction =  2,
            BroadcastingPrintingAndPublishing =  3,
            Brokers =  4,
            BuildingSupplyRetail =  5,
            BusinessServices =  6,
            Consulting =  7,
            ConsumerServices =  8,
            DesignDirectionAndCreativeManagement =  9,
            DistributorsDispatchersAndProcessors =  10,
            DoctorSOfficesAndClinics =  11,
            DurableManufacturing =  12,
            EatingAndDrinkingPlaces =  13,
            EntertainmentRetail =  14,
            EquipmentRentalAndLeasing =  15,
            Financial =  16,
            FoodAndTobaccoProcessing =  17,
            InboundCapitalIntensiveProcessing =  18,
            InboundRepairAndServices =  19,
            Insurance =  20,
            LegalServices =  21,
            NonDurableMerchandiseRetail =  22,
            OutboundConsumerService =  23,
            PetrochemicalExtractionAndDistribution =  24,
            ServiceRetail =  25,
            SIGAffiliations =  26,
            SocialServices =  27,
            SpecialOutboundTradeContractors =  28,
            SpecialtyRealty =  29,
            Transportation =  30,
            UtilityCreationAndDistribution =  31,
            VehicleRetail =  32,
            Wholesale =  33,
        }
        export const enum OwnershipCode {
            Public =  1,
            Private =  2,
            Subsidiary =  3,
            Other =  4,
        }
        export const enum PaymentTermsCode {
            Net30 =  1,
            _2Percent10Net30 =  2,
            Net45 =  3,
            Net60 =  4,
        }
        export const enum PreferredAppointmentDayCode {
            Sunday =  0,
            Monday =  1,
            Tuesday =  2,
            Wednesday =  3,
            Thursday =  4,
            Friday =  5,
            Saturday =  6,
        }
        export const enum PreferredAppointmentTimeCode {
            Morning =  1,
            Afternoon =  2,
            Evening =  3,
        }
        export const enum PreferredContactMethodCode {
            Any =  1,
            Email =  2,
            Phone =  3,
            Fax =  4,
            Mail =  5,
        }
        export const enum ShippingMethodCode {
            DefaultValue =  1,
        }
        export const enum StateCode {
            Active =  0,
            Inactive =  1,
        }
        export const enum StatusCode {
            Active =  1,
            Inactive =  2,
        }
        export const enum TerritoryCode {
            DefaultValue =  1,
        }
    }
}
