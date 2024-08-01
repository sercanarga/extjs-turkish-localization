Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
            "Ocak": 0,
            "Şubat": 1,
            "Mart": 2,
            "Nisan": 3,
            "Mayıs": 4,
            "Haziran": 5,
            "Temmuz": 6,
            "Ağustos": 7,
            "Eylül": 8,
            "Ekim": 9,
            "Kasım": 10,
            "Aralık": 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

        Ext.Date.shortDayNames = ["Paz", "Pzt", "Sal", "Çrş", "Prş", "Cum", "Cmt"];

        Ext.Date.getShortDayName = function(day) {
            return Ext.Date.shortDayNames[day];
        };
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '₺',
            // Turkish Lira
            dateFormat: 'd/m/Y'
        });
    }
});

Ext.define("Ext.locale.tr.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.tr.grid.Grid", {
    override: "Ext.grid.Grid",
    ddText: "Seçili satır sayısı: {0}"
});

Ext.define("Ext.locale.tr.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Sekmeyi kapat"
});

Ext.define("Ext.locale.tr.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Bu alandaki değer geçersiz"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.tr.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Yükleniyor..."
});

Ext.define("Ext.locale.tr.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Bugün",
    minText: "Bu alan için tarih {0}'dan sonra olmalıdır",
    maxText: "Bu alan için tarih {0}'dan önce olmalıdır",
    disabledDaysText: "Devre dışı",
    disabledDatesText: "Devre dışı",
    nextText: 'Gelecek Ay (Kontrol+Sağ)',
    prevText: 'Önceki Ay (Kontrol+Sol)',
    monthYearText: 'Bir ay seçiniz (Yılı artırmak/azaltmak için Kontrol+Yukarı/Aşağı)',
    todayTip: "{0} (Boşluk Tuşu - Spacebar)",
    format: "d/m/Y",
    startDay: 1
});

Ext.define("Ext.locale.tr.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;Tamam&#160;",
    cancelText: "İptal"
});

Ext.define("Ext.locale.tr.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Sayfa",
    afterPageText: " / {0}",
    firstText: "İlk Sayfa",
    prevText: "Önceki Sayfa",
    nextText: "Sonraki Sayfa",
    lastText: "Son Sayfa",
    refreshText: "Yenile",
    displayMsg: "Gösterilen {0} - {1} / {2}",
    emptyMsg: 'Görüntülenecek veri yok'
});

Ext.define("Ext.locale.tr.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Girilen veri minimum {0} karakter olabilir",
    maxLengthText: "Girilen veri maksimum {0} karakter olabilir",
    blankText: "Bu alan zorunludur",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.tr.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Bu alan için minimum değer {0}'dır",
    maxText: "Bu alan için maksimum değer {0}'dır",
    nanText: "{0} geçerli bir sayı değildir"
});

Ext.define("Ext.locale.tr.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Disabled",
    disabledDatesText: "Disabled",
    minText: "Bu alandaki tarih {0}'dan sonra olmalıdır",
    maxText: "Bu alandaki tarih {0}'dan önce olmalıdır",
    invalidText: "{0} geçerli bir tarih değildir - {1} biçiminde olmalıdır",
    format: "d/m/Y",
    altFormats: "d.m.y|d.m.Y|d/m/y|d-m-Y|d-m-y|d.m|d/m|d-m|dm|dmY|dmy|d|Y.m.d|Y-m-d|Y/m/d"
});

Ext.define("Ext.locale.tr.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Yükleniyor..."
    });
});

Ext.define("Ext.locale.tr.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Bu alan "user@example.com" biçiminde bir e-posta adresi olmalıdır',
    urlText: 'Bu alan "http://www.example.com" şeklinde URL adres formatında olmalıdır',
    alphaText: 'Bu alan sadece harf ve _ içermelidir',
    alphanumText: 'Bu alan sadece harf, rakam ve _ içermelidir'
});

Ext.define("Ext.locale.tr.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'Lütfen bağlantı için URL adresi girin:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Kalın(Bold) (Ctrl+B)',
                text: 'Seçilen metni kalın yap.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'İtalik(Italic) (Ctrl+I)',
                text: 'Seçili metni italik yap.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Alt Çizgi(Underline) (Ctrl+U)',
                text: 'Seçilen metnin altını çiz.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'Fontu büyült',
                text: 'Font boyutunu artır.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'Fontu küçült',
                text: 'Font Boyutunu küçült.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Arka Plan Rengi',
                text: 'Seçili metnin arka plan rengini değiştir.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Yazı Rengi',
                text: 'Seçili metnin rengini değiştir.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Sola Yasla',
                text: 'Yazıyı sola yasla.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'Ortala',
                text: 'Yazıyı ortala.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Sağa Yasla',
                text: 'Yazıyı sağa yasla.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'Noktalı Liste',
                text: 'Noktalı listeye başla.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'Numaralı Liste',
                text: 'Numaralı lisyeye başla.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'Köprü',
                text: 'Seçili metne köprü ekle.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'Kaynak Kodu Düzenle',
                text: 'Kaynak kodu düzenleme moduna geç.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.tr.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Artan şekilde sırala",
    sortDescText: "Azalan şekilde sırala",
    lockText: "Kolonu kilitle",
    unlockText: "Kolon kilidini kaldır",
    columnsText: "Kolonlar"
});

Ext.define("Ext.locale.tr.grid.GroupingFeature", {
    override: "Ext.grid.feature.Grouping",
    emptyGroupText: '(Yok)',
    groupByText: 'Bu alana göre grupla',
    showGroupsText: 'Gruplar halinde göster'
});

Ext.define("Ext.locale.tr.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "İsim",
    valueText: "Değer",
    dateFormat: "d/m/Y"
});

Ext.define("Ext.locale.tr.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "Tamam",
        cancel: "İptal",
        yes: "Evet",
        no: "Hayır"
    }
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.tr.Component", {
    override: "Ext.Component"
});
