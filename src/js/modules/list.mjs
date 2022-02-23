import { translate as t } from '@nextcloud/l10n'

var format_List = {
    "en-EN": "en-EN",
    "fr-FR": "fr-FR"
}

var currency_list = {
    "AFA": "Afghan Afghani",
    "ALL": "Albanian Lek",
    "DZD": "Algerian Dinar",
    "AOA": "Angolan Kwanza",
    "ARS": "Argentine Peso",
    "AMD": "Armenian Dram",
    "AWG": "Aruban Florin",
    "AUD": "Australian Dollar",
    "AZN": "Azerbaijani Manat",
    "BSD": "Bahamian Dollar",
    "BHD": "Bahraini Dinar",
    "BDT": "Bangladeshi Taka",
    "BBD": "Barbadian Dollar",
    "BYR": "Belarusian Ruble",
    "BEF": "Belgian Franc",
    "BZD": "Belize Dollar",
    "BMD": "Bermudan Dollar",
    "BTN": "Bhutanese Ngultrum",
    "BTC": "Bitcoin",
    "BOB": "Bolivian Boliviano",
    "BAM": "Bosnia-Herzegovina Convertible Mark",
    "BWP": "Botswanan Pula",
    "BRL": "Brazilian Real",
    "GBP": "British Pound Sterling",
    "BND": "Brunei Dollar",
    "BGN": "Bulgarian Lev",
    "BIF": "Burundian Franc",
    "KHR": "Cambodian Riel",
    "CAD": "Canadian Dollar",
    "CVE": "Cape Verdean Escudo",
    "KYD": "Cayman Islands Dollar",
    "XOF": "CFA Franc BCEAO",
    "XAF": "CFA Franc BEAC",
    "XPF": "CFP Franc",
    "CLP": "Chilean Peso",
    "CNY": "Chinese Yuan",
    "COP": "Colombian Peso",
    "KMF": "Comorian Franc",
    "CDF": "Congolese Franc",
    "CRC": "Costa Rican Colon",
    "HRK": "Croatian Kuna",
    "CUC": "Cuban Convertible Peso",
    "CZK": "Czech Republic Koruna",
    "DKK": "Danish Krone",
    "DJF": "Djiboutian Franc",
    "DOP": "Dominican Peso",
    "XCD": "East Caribbean Dollar",
    "EGP": "Egyptian Pound",
    "ERN": "Eritrean Nakfa",
    "EEK": "Estonian Kroon",
    "ETB": "Ethiopian Birr",
    "EUR": "Euro",
    "FKP": "Falkland Islands Pound",
    "FJD": "Fijian Dollar",
    "GMD": "Gambian Dalasi",
    "GEL": "Georgian Lari",
    "DEM": "German Mark",
    "GHS": "Ghanaian Cedi",
    "GIP": "Gibraltar Pound",
    "GRD": "Greek Drachma",
    "GTQ": "Guatemalan Quetzal",
    "GNF": "Guinean Franc",
    "GYD": "Guyanaese Dollar",
    "HTG": "Haitian Gourde",
    "HNL": "Honduran Lempira",
    "HKD": "Hong Kong Dollar",
    "HUF": "Hungarian Forint",
    "ISK": "Icelandic Kana",
    "INR": "Indian Rupee",
    "IDR": "Indonesian Rupiah",
    "IRR": "Iranian Rial",
    "IQD": "Iraqi Dinar",
    "ILS": "Israeli New Sheqel",
    "ITL": "Italian Lira",
    "JMD": "Jamaican Dollar",
    "JPY": "Japanese Yen",
    "JOD": "Jordanian Dinar",
    "KZT": "Kazakhstani Tenge",
    "KES": "Kenyan Shilling",
    "KWD": "Kuwaiti Dinar",
    "KGS": "Kyrgystani Som",
    "LAK": "Laotian Kip",
    "LVL": "Latvian Lats",
    "LBP": "Lebanese Pound",
    "LSL": "Lesotho Loti",
    "LRD": "Liberian Dollar",
    "LYD": "Libyan Dinar",
    "LTL": "Lithuanian Litas",
    "MOP": "Macanese Pataca",
    "MKD": "Macedonian Denar",
    "MGA": "Malagasy Ariary",
    "MWK": "Malawian Kwacha",
    "MYR": "Malaysian Ringgit",
    "MVR": "Maldivian Rufiyaa",
    "MRO": "Mauritanian Ouguiya",
    "MUR": "Mauritian Rupee",
    "MXN": "Mexican Peso",
    "MDL": "Moldovan Leu",
    "MNT": "Mongolian Tugrik",
    "MAD": "Moroccan Dirham",
    "MZM": "Mozambican Metical",
    "MMK": "Myanmar Kyat",
    "NAD": "Namibian Dollar",
    "NPR": "Nepalese Rupee",
    "ANG": "Netherlands Antillean Guilder",
    "TWD": "New Taiwan Dollar",
    "NZD": "New Zealand Dollar",
    "NIO": "Nicaraguan Cadoba",
    "NGN": "Nigerian Naira",
    "KPW": "North Korean Won",
    "NOK": "Norwegian Krone",
    "OMR": "Omani Rial",
    "PKR": "Pakistani Rupee",
    "PAB": "Panamanian Balboa",
    "PGK": "Papua New Guinean Kina",
    "PYG": "Paraguayan Guarani",
    "PEN": "Peruvian Nuevo Sol",
    "PHP": "Philippine Peso",
    "PLN": "Polish Zloty",
    "QAR": "Qatari Rial",
    "RON": "Romanian Leu",
    "RUB": "Russian Ruble",
    "RWF": "Rwandan Franc",
    "SVC": "Salvadoran Colon",
    "WST": "Samoan Tala",
    "SAR": "Saudi Riyal",
    "RSD": "Serbian Dinar",
    "SCR": "Seychellois Rupee",
    "SLL": "Sierra Leonean Leone",
    "SGD": "Singapore Dollar",
    "SKK": "Slovak Koruna",
    "SBD": "Solomon Islands Dollar",
    "SOS": "Somali Shilling",
    "ZAR": "South African Rand",
    "KRW": "South Korean Won",
    "XDR": "Special Drawing Rights",
    "LKR": "Sri Lankan Rupee",
    "SHP": "St. Helena Pound",
    "SDG": "Sudanese Pound",
    "SRD": "Surinamese Dollar",
    "SZL": "Swazi Lilangeni",
    "SEK": "Swedish Krona",
    "CHF": "Swiss Franc",
    "SYP": "Syrian Pound",
    "STD": "São Tomé and Príncipe Dobra",
    "TJS": "Tajikistani Somoni",
    "TZS": "Tanzanian Shilling",
    "THB": "Thai Baht",
    "TOP": "Tongan Pa'anga",
    "TTD": "Trinidad & Tobago Dollar",
    "TND": "Tunisian Dinar",
    "TRY": "Turkish Lira",
    "TMT": "Turkmenistani Manat",
    "UGX": "Ugandan Shilling",
    "UAH": "Ukrainian Hryvnia",
    "AED": "United Arab Emirates Dirham",
    "UYU": "Uruguayan Peso",
    "USD": "US Dollar",
    "UZS": "Uzbekistan Som",
    "VUV": "Vanuatu Vatu",
    "VEF": "Venezuelan Bolivar",
    "VND": "Vietnamese Dong",
    "YER": "Yemeni Rial",
    "ZMK": "Zambian Kwacha"
};

export function getFormatList(currentFormat) {
    var list = "";
    for (const [key, value] of Object.entries(format_List)) {
        if (currentFormat === key) {
            list += "<option selected value='" + key + "'>" + value + "</option>";
        } else {
            list += "<option value='" + key + "'>" + value + "</option>";
        }

    }
    return list;
}


export function getCurrencyList(currentDevise) {
    var list = "";
    for (const [key, value] of Object.entries(currency_list)) {
        if (currentDevise === key) {
            list += "<option selected value='" + key + "'>" + value + "</option>";
        } else {
            list += "<option value='" + key + "'>" + value + "</option>";
        }

    }
    return list;
}

export function getAutoIncrement(activate){
    if(activate == 0){
        return "<option selected value='0'>" + t('gestion', 'disable') + "</option><option value='1'>" + t('gestion', 'enable') + "</option>"
    }else{
        return "<option value='0'>" + t('gestion', 'disable') + "</option><option selected value='1'>" + t('gestion', 'enable') + "</option>"
    }
}

export function getFormatNumber(format){

}