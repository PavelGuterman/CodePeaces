  dropSize = ko.observable({
        height: '100px',
        width: '250px'
    });
    FileSelect = () => {
        $('#inputFile').val('').click();
    }
    FileManualselection = (module: any, e: Event) => {
        this.ErrorList.removeAll();
        var files: any = e.currentTarget['files'];
        if (!files || !files[0]) {
            return;
        }
        this.fileTypeString = files[0].type;
        if (this.fileTypeString.indexOf('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') != -1
            || this.fileTypeString.indexOf("application/vnd.ms-excel") != -1) {
            var reader = new FileReader();
            reader.onload = (e: ProgressEvent) => {
                this.ReadFile(reader, e);
            };
            reader.readAsDataURL(files[0]);
        } else {
            this.ErrorList.push({ error: "אנא בחר קובץ אקסל בלבד (XLS,XLSX וכו')", row: "" });
           
        }
    }
    readDropFile = (module: any, e: DragEvent) => {
        this.ErrorList.removeAll();
        e = e['originalEvent'];
        if (e.dataTransfer) {
            if (e.dataTransfer.files.length) {
                e.preventDefault();
                e.stopPropagation();
                var files = e.dataTransfer.files;
                this.fileTypeString = files[0].type;
                if (this.fileTypeString.indexOf('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') != -1
                    || this.fileTypeString.indexOf("application/vnd.ms-excel") != -1) {
                    var reader = new FileReader();
                    reader.onload = (e: ProgressEvent) => {
                        this.ReadFile(reader, e);
                    };
                    reader.readAsDataURL(files[0]);
                } else {
                    this.ErrorList.push({ error: "אנא בחר קובץ אקסל בלבד (XLS,XLSX וכו')", row: "" });
                }
            }
        }
    }
    //***END File Selection****
    ReadFile = (s: FileReader, e: ProgressEvent) => { }
    //DRAG&DROP CANCEL DEFAULTs
    cancelDefault = (e: MouseEvent) => {
        if (e.preventDefault)
            e.preventDefault();
        return false;
    }
