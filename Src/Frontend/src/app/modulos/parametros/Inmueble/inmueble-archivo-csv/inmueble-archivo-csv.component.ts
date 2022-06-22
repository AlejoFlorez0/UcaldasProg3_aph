import { Component, OnInit } from '@angular/core';
import { InmuebleModel } from 'src/app/modelos/parametros/inmueble.model';
import { InmuebleService } from "src/app/servicios/parametros/inmueble.service";

@Component({
  selector: 'app-inmueble-archivo-csv',
  templateUrl: './inmueble-archivo-csv.component.html',
  styleUrls: ['./inmueble-archivo-csv.component.css']
})
export class InmuebleArchivoCsvComponent implements OnInit {

  public records: any[] = [];

  constructor(private servicio: InmuebleService) { }

  ngOnInit(): void {

  }

  uploadListener($event: any): void {

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
      if (curruntRecord.length == headerLength) {
        let csvRecord: InmuebleModel = new InmuebleModel();
        csvRecord.area = curruntRecord[0].trim();
        csvRecord.nroDocumentoPropietario = Number(curruntRecord[1].trim());
        csvRecord.nroDocumentoHabitante = Number(curruntRecord[2].trim());
        csvRecord.idTipoInmueble = Number(curruntRecord[3].trim());
        csvRecord.idSeccion = Number(curruntRecord[4].trim());
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

  saveRecords() {

    for (let index = 0; index < this.records.length; index++) {
      const element = this.records[index];
      let model = new InmuebleModel();

      model.area = element.area;
      model.nroDocumentoHabitante = element.nroDocumentoHabitante;
      model.nroDocumentoPropietario = element.nroDocumentoPropietario;
      model.idTipoInmueble = element.idTipoInmueble;
      model.idSeccion = element.idSeccion;

      this.servicio.GuardarListaInmueble(model).subscribe({
        next: (data: InmuebleModel) => {
          window.location.href = "http://localhost:4200/parametros/Listar-Inmueble";
        }
      })

    }

  }

}
