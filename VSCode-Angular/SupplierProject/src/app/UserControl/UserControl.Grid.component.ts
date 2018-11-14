import {Component,
            Input,
            Output,
            EventEmitter
        } from "@angular/core"

@Component({
    selector: "my-grid",
    templateUrl: "UserControl.Grid.view.html"
})

export class GridComponent{
    // Column Names
    gridColumns: Array<object> = new Array<object>();
    // Data
    gridData: Array<object> = new  Array<object>();

    @Input("grid-columns")
    set setgridColumns(_gridColumns: Array<object>){
        this.gridColumns = _gridColumns;
    }

    @Input("grid-data")
    set setgridDataSet(_gridData: Array<object>){
        this.gridData = _gridData;
    }

    @Output("grid-selected")
    selected: EventEmitter<object> = new EventEmitter<object>();

    Select(_selected: Object){
        this.selected.emit(_selected);
    }
}