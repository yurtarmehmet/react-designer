/**
 * Created by mehmetyurtar on 31/08/2017.
 */


export const config = {
    parentElements : [
        {
            "label": "Musteri Bilgileri",
            "name": "customer-info",
            "isOpen": true
        },
        {
            "label": "Fatura Bilgileri",
            "name": "invoice-info",
            "isOpen": false
        },
        {
            "label": "Hizmet / Urun Bilgileri",
            "name": "service-info",
            "isOpen": false,
            "isFixedTable": true
        },
        {
            "label": "Ozel Notlar",
            "name": "other-notes",
            "isOpen": false
        }
    ],
    mainElements : [
        {
            "label": "Müşteri Telefon Numarası",
            "variableName": "verginumarasi",
            "icon": "bars",
            "parentName": "customer-info",
            "placeHolder": "Test musteri"
        },
        {
            "label": "Vergi Dairesi",
            "variableName": "verginumarasi2",
            "icon": "bars",
            "parentName": "customer-info",
            "placeHolder": "123456789"
        },
        {
            "label": "Vergi Numarası",
            "variableName": "verginumarasi3",
            "icon": "bars",
            "parentName": "customer-info",
            "placeHolder": "123456789"
        },
        {
            "label": "Fatura Numarasi",
            "variableName": "faturano1",
            "icon": "bars",
            "parentName": "invoice-info",
            "placeHolder": "123456789"
        },
        {
            "label": "Irsaliye No",
            "variableName": "faturano2",
            "icon": "bars",
            "parentName": "invoice-info",
            "placeHolder": "123456789"
        },
        {
            "label": "Fiili Sevk Tarihi",
            "variableName": "faturano3",
            "icon": "bars",
            "parentName": "invoice-info",
            "placeHolder": "123456789"
        },
        {
            "label": "Hizmet / Urun Kalemleri",
            "variableName": "hizmet1",
            "icon": "bars",
            "parentName": "service-info",
            "placeHolder": "123456789",
            "isFixedTable": true
        },
        {
            "label": "Metin Alani",
            "variableName": "freetext",
            "icon": "bars",
            "parentName": "other-notes",
            "placeHolder": "Örnek Metin",
            "isFreeText": true
        },
        {
            "label": "Yazdırmaya Ozel Not",
            "variableName": "speacialnote",
            "icon": "bars",
            "parentName": "other-notes",
            "placeHolder": "Ozel Notlarınızı bu alana yazdırabilirsiniz.",
        }

    ],
    tableFields: [
        {
            "variableName": "serviceorproduct",
            "label": "Hizmet/Urun",
            "labelOnTable": "Hizmet veya urun tanimi",
            "descOnTable":"Hizmet veya urun aciklamasi",
            "checked": true,
            "width": 287,
            "order": 0
        },
        {
            "variableName": "kod",
            "label": "Kod",
            "checked": true,
            "labelOnTable": "#",
            "width": 100,
            "order": 1
        },
        {
            "variableName": "description",
            "label": "Aciklama",
            "labelOnTable": "Hizmet veya urun aciklamasi",
            "checked": true,
            "width": 100,
            "order": 2
        },
        {
            "variableName": "amount",
            "label": "Miktar",
            "labelOnTable": "1",
            "checked": true,
            "width": 58,
            "order": 3
        },
        {
            "variableName": "unit",
            "label": "Birim",
            "labelOnTable": "birim",
            "checked": false,
            "width": 100,
            "order": 4
        },
        {
            "variableName": "unitprice",
            "label": "Birim Fiyat",
            "labelOnTable": "1.000,00",
            "checked": false,
            "width": 87,
            "order": 5
        },
        {
            "variableName": "discount",
            "label": "Indirim",
            "labelOnTable": "0,00",
            "checked": false,
            "width": 100,
            "order": 6
        },
        {
            "variableName": "kdv",
            "label": "KDV",
            "labelOnTable": "%18",
            "checked": false,
            "width": 100,
            "order": 7
        },
        {
            "variableName": "overall",
            "label": "Toplam",
            "labelOnTable": "1.000,00",
            "checked": false,
            "width": 100,
            "order": 8
        },
        {
            "variableName": "otv",
            "label": "OTV",
            "labelOnTable": "12,00",
            "checked": false,
            "width": 100,
            "order": 9
        },
        {
            "variableName": "oiv",
            "label": "OIV",
            "labelOnTable": "5,00",
            "checked": false,
            "width": 100,
            "order": 10
        }
    ],
    canvasElements: [
        {
            "fontSize": "12",
            "isBold": false,
            "isItalic": false,
            "textAlign": "left",
            "width": 100,
            "height": 20,
            "fontFamily": "'PT Sans', sans-serif",
            "fontWeight": "normal",
            "fontStyle": "normal",
            "variableName": "verginumarasi3",
            "label": "Vergi Numarası",
            "placeHolder": "123456789",
            "positionX": 471,
            "positionY": 279,
            "parentName": "customer-info"
        },
        {
            "fontSize": "12",
            "isBold": false,
            "isItalic": false,
            "textAlign": "left",
            "width": 164,
            "height": 20,
            "fontFamily": "'PT Sans', sans-serif",
            "fontWeight": "normal",
            "fontStyle": "normal",
            "variableName": "hizmet1",
            "label": "Hizmet / Urun Kalemleri",
            "placeHolder": "123456789",
            "positionX": 31,
            "positionY": 337,
            "parentName": "service-info",
            "isFixedTable": true
        },
        {
            "fontSize": "12",
            "isBold": false,
            "isItalic": false,
            "textAlign": "left",
            "width": 100,
            "height": 20,
            "fontFamily": "'PT Sans', sans-serif",
            "fontWeight": "normal",
            "fontStyle": "normal",
            "variableName": "verginumarasi",
            "label": "Müşteri Telefon Numarası",
            "placeHolder": "Test musteri",
            "positionX": 94,
            "positionY": 179,
            "parentName": "customer-info"
        }
    ],
    selectedEl: {
        "fontSize": "12",
        "isBold": false,
        "isItalic": false,
        "textAlign": "left",
        "width": 100,
        "height": 20,
        "fontFamily": "'PT Sans', sans-serif",
        "fontWeight": "normal",
        "fontStyle": "normal",
        "variableName": "verginumarasi",
        "label": "Müşteri Telefon Numarası",
        "placeHolder": "Test musteri",
        "positionX": 94,
        "positionY": 179,
        "parentName": "customer-info"
    },
    "paperWidth": 595,
    "paperHeight": 842,
    "paperOrientation": "v",
    "paperBackground": "http://www.argeseajans.com/FileUpload/bs33204/File/a4faturasablonu-1.gif",
    "useDescriptionWithProduct": false,
    componentDefaults: {
        "fontSize":   "12",
        "isBold": false,
        "isItalic": false,
        "textAlign": "left",
        "width": 100,
        "height": 20,
        "fontFamily": "'PT Sans', sans-serif",
        "fontWeight": "normal",
        "fontStyle": "normal",
        "textAlign": "left",
    },
    "isElementSelected": true,
    "customPaperSize": false,
    "isPrinting": false,
    "mainElversion": 0
};

export default config;