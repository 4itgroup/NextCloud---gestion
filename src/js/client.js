import '@nextcloud/dialogs/styles/toast.scss'
import 'datatables.net-dt/css/jquery.dataTables.css';
import '../css/mycss.less';

import DataTable from 'datatables.net';
import { globalConfiguration, optionDatatable } from "./modules/mainFunction.mjs";
import './listener/main_listener';
import { Client } from "./objects/client.mjs";


window.addEventListener('DOMContentLoaded', function () {
    globalConfiguration();
    Client.loadClientDT(new DataTable('.tabledt',optionDatatable));

});

