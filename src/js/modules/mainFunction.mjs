// import {translate as t, translatePlural as n} from '@nextcloud/l10n'
import {FilePicker,showMessage,showError} from "@nextcloud/dialogs";

export function configureDT(){
    $('.editable').attr('title',t('gestion', 'Editable (Click to change)'));
}

/**
 * Support de langue pour datatable
 */
export function langage(){
    return ;
}

/**
 * Success message
 */
export function showDone() {
    showMessage(t('gestion', 'Added'));
}
