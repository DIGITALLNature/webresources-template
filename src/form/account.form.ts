export namespace Account {
    export function onLoadWithEarlyBoundSpecificForm(executionContext: Xrm.Events.EventContext) {
        // Get a specific form context containing only the attributes that exists on this form
        const formContext = executionContext.getFormContext<XrmTable.Account.AccountMainFormContext>();

        // Get inline hints for the attibute names that do exist on the form
        const nameAttribute = formContext.getAttribute("name");

        // Same goes for the tabs/sections/controls
        const nameControl = formContext.ui.tabs.get("SUMMARY_TAB").sections.get("ACCOUNT_INFORMATION").controls.get("name");

        if (nameControl.getAttribute() == nameAttribute)
        {
            // Do something
        }
    }

    export function onLoadWithEarlyBoundGeneral(executionContext: Xrm.Events.EventContext) {
        // Get a form context containing all the attibutes of the table
        const formContext = executionContext.getFormContext<XrmTable.Account.FormContext>();

        // Get inline hints for the attibute names that do exist on the form
        const nameAttribute = formContext.getAttribute("name");

        // Same goes for the tabs/sections/controls
        const nameControl = formContext.ui.tabs.get("SUMMARY_TAB").sections.get("ACCOUNT_INFORMATION").controls.get("name");

        // See how we need to cast the control since we don't know the specific type?
        if ((<Xrm.Controls.StringControl>nameControl).getAttribute() == nameAttribute)
        {
            // Do something
        }
    }

    export function onLoad(executionContext: Xrm.Events.EventContext) {
        // Get a generic form context without any type hints
        const formContext = executionContext.getFormContext();

        // A wrong name for the get attribute method will not be caught as error here
        const nameAttribute = formContext.getAttribute("name");

        // Same goes for the tabs/sections/controls
        const nameControl = formContext.ui.tabs.get("SUMMARY_TAB").sections.get("ACCOUNT_INFORMATION").controls.get("name");

        // See how we need to cast the control since we don't know the specific type?
        if ((<Xrm.Controls.StringControl>nameControl).getAttribute() == nameAttribute)
        {
            // Do something
        }
    }
}
