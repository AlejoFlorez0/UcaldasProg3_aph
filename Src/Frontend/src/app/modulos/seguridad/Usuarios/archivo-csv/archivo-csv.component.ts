import { Component, OnInit } from '@angular/core';
import { DatosUsuarioModel } from 'src/app/modelos/seguridad/usuario-data.model';

@Component({
  selector: 'app-archivo-csv',
  templateUrl: './archivo-csv.component.html',
  styleUrls: ['./archivo-csv.component.css']
})
export class ArchivoCsvComponent implements OnInit {

  public records: any[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  uploadListener($event: any): void {

    let text = [];
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);

        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };

    } else {
      alert("Solo se permite archivo csv");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      console.log(curruntRecord);
      if (curruntRecord.length == headerLength) {
        let csvRecord: DatosUsuarioModel = new DatosUsuarioModel();
        csvRecord.nroDocument = Number(curruntRecord[0].trim());
        csvRecord.primerNombre = curruntRecord[1].trim();
        csvRecord.segundoNombre = curruntRecord[2].trim();
        csvRecord.primerApellido = curruntRecord[3].trim();
        csvRecord.segundoApellido = curruntRecord[4].trim();
        csvRecord.email = curruntRecord[5].trim();
        csvRecord.password = curruntRecord[6].trim();
        csvRecord.celular = curruntRecord[7].trim();
        csvRecord.rolId = Number(curruntRecord[8].trim()[0]);
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.records = [];
  }

}
