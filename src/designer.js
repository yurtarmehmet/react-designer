/**
 * Created by mehmetyurtar on 17/09/2017.
 */
import React from 'react';

import Html2Canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './App.css';
import '../src/fonts/css/font-awesome.min.css';


import Config from './config';
import DesignerHeader from './components/designerHeader';
import DesignerMainElements from './components/designerMainElements';
import DesignerCanvasElements from'./components/designerCanvasElements';
import DesignerToolbar from './components/designerToolbar';

class Designer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "parentElements": [],
            "mainElements":   [],
            "tableFields": [],
            "canvasElements": [],
            "selectedEl": {},
            "paperWidth": "",
            "paperHeight": "",
            "paperOrientation": "",
            "paperBackground": "",
            "useDescriptionWithProduct": false,
            "isElementSelected": false,
            "customPaperSize": "",
            "isPrinting": false,
            "mainElversion": ""
        };

        this.setConfig      = this.setConfig.bind(this);
        this.mainElDragStop = this.mainElDragStop.bind(this);
        this.canvasElementClicked = this.canvasElementClicked.bind(this);
        this.canvasElDragStop     = this.canvasElDragStop.bind(this);
        this.canvasElResizeStop   = this.canvasElResizeStop.bind(this);
        this.onSelectedElPropertyChange = this.onSelectedElPropertyChange.bind(this);
        this.onSelectedElFontWeightChange = this.onSelectedElFontWeightChange.bind(this);
        this.onSelectedElFontStyleChange = this.onSelectedElFontStyleChange.bind(this);
        this.onSelectedElTextAlignChange = this.onSelectedElTextAlignChange.bind(this);
        this.toggleMainElContainer       = this.toggleMainElContainer.bind(this);
        this.onSelectedElRemove          = this.onSelectedElRemove.bind(this);
        this.onCustomPaperSizeChecked           = this.onCustomPaperSizeChecked.bind(this);
        this.onCustomPaperSizeChange         = this.onCustomPaperSizeChange.bind(this);
        this.predefinedPaperSize = this.predefinedPaperSize.bind(this);
        this.onPaperOrientationChange = this.onPaperOrientationChange.bind(this);
        this.onPaperBackgroundChange = this.onPaperBackgroundChange.bind(this);
        this.printTestOutput         = this.printTestOutput.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.toggleTableField = this.toggleTableField.bind(this);
        this.save = this.save.bind(this);
        this.onTableWidthChange = this.onTableWidthChange.bind(this);
        this.onResizing= this.onResizing.bind(this);
        this.onDescriptionStatusChange = this.onDescriptionStatusChange.bind(this);
        this.changeFieldOrder = this.changeFieldOrder.bind(this);
    }

    componentDidMount(){
        this.setConfig()
    }

    setConfig(){
        this.setState({
            "parentElements": this.props.config.parentElements,
            "mainElements":   this.props.config.mainElements,
            "tableFields": this.props.config.tableFields,
            "canvasElements": this.props.config.canvasElements,
            "selectedEl": this.props.config.selectedEl,
            "paperWidth": this.props.config.paperWidth,
            "paperHeight": this.props.config.paperHeight,
            "paperOrientation": this.props.config.paperOrientation,
            "paperBackground": this.props.config.paperBackground,
            "useDescriptionWithProduct": this.props.config.useDescriptionWithProduct,
            "isElementSelected": this.props.config.isElementSelected,
            "customPaperSize": this.props.config.customPaperSize,
            "isPrinting": this.props.config.isPrinting,
            "mainElversion": this.props.config.mainElversion
        });
    }

    onSelectedElPropertyChange(e){
        let newProperty = e.target.value;
        let changedProp = e.target.name;
        let selectedEl  = this.state.selectedEl;
        let newCanvasElements = this.state.canvasElements;
        selectedEl[changedProp] = newProperty;
        newCanvasElements.forEach((canvasEl) => {
            if(canvasEl.variableName === selectedEl.variableName){
                if(changedProp.indexOf("font") !== -1){
                    canvasEl[changedProp] = newProperty;
                }else{
                    if(changedProp === "placeHolder"){
                        canvasEl[changedProp] = newProperty;
                    }else{
                        if(newProperty === ""){
                            newProperty = 0;
                        }
                        newProperty = parseInt(newProperty);
                        canvasEl[changedProp] = newProperty;
                    }
                }
            }
        });
        this.setState({
            selectedEl: selectedEl,
            canvasElements: newCanvasElements
        });
    }

    onDescriptionStatusChange(){
        this.setState({
            useDescriptionWithProduct: !this.state.useDescriptionWithProduct
        })
    }

    changeFieldOrder(variableName,changeTo){
        let newTableFields = [].concat(this.state.tableFields);
        let currentEl;
        let currentInd;
        let currentOrder;
        newTableFields.forEach((tableField, tableFieldInd) => {
            if(tableField.variableName === variableName){
                currentEl = tableField;
                currentInd = tableFieldInd;
                currentOrder = tableField.order;
            }
        });
        if(changeTo === "before"){
            newTableFields[currentInd].order = newTableFields[currentInd -1].order;
            newTableFields[currentInd -1].order = currentOrder;
        }else{
            newTableFields[currentInd].order = newTableFields[currentInd + 1].order;
            newTableFields[currentInd + 1].order = currentOrder;
        }

        newTableFields.sort(function(a, b) {
            return parseInt(a.order) - parseInt(b.order);
        });

        this.setState({
            tableFields: newTableFields,
            mainElversion: Math.random()
        });
    }


    onSelectedElFontWeightChange(){
        let selectedEl  = this.state.selectedEl;
        let newProperty = selectedEl.fontWeight === "bold" ? "normal" : "bold";
        let changedProp = "fontWeight";
        let newCanvasElements = this.state.canvasElements;
        selectedEl[changedProp] = newProperty;
        newCanvasElements.forEach((canvasEl) => {
            if(canvasEl.variableName === selectedEl.variableName){
                canvasEl[changedProp] = newProperty;
            }
        });
        this.setState({
            selectedEl: selectedEl,
            canvasElements: newCanvasElements
        });
    }


    onSelectedElFontStyleChange(e){
        let selectedEl  = this.state.selectedEl;
        let newProperty = selectedEl.fontStyle === "italic" ? "normal" : "italic";
        let changedProp = "fontStyle";
        let newCanvasElements = this.state.canvasElements;
        selectedEl[changedProp] = newProperty;
        newCanvasElements.forEach((canvasEl) => {
            if(canvasEl.variableName === selectedEl.variableName){
                canvasEl[changedProp] = newProperty;
            }
        });
        this.setState({
            selectedEl: selectedEl,
            canvasElements: newCanvasElements
        });
    }

    onSelectedElTextAlignChange(selectedValue){
        let selectedEl  = this.state.selectedEl;
        let newProperty = selectedValue;
        let changedProp = "textAlign";
        let newCanvasElements = this.state.canvasElements;
        selectedEl[changedProp] = newProperty;
        newCanvasElements.forEach((canvasEl) => {
            if(canvasEl.variableName === selectedEl.variableName){
                canvasEl[changedProp] = newProperty;
            }
        });
        this.setState({
            selectedEl: selectedEl,
            canvasElements: newCanvasElements
        });
    }

    onSelectedElRemove(e){
        let newCanvasElements   = [];
        let newMainElements     = [].concat(this.state.mainElements);
        this.state.canvasElements.forEach((canvasEl) => {
            if(canvasEl.variableName !== this.state.selectedEl.variableName){
                newCanvasElements.push(canvasEl);
            }
        });
        newMainElements.forEach((mainEl) => {
            if(mainEl.variableName === this.state.selectedEl.variableName){
                mainEl.hidden = false;
            }
        });
        this.setState({
            canvasElements: newCanvasElements,
            mainElements: newMainElements,
            selectedEl: false,
            isElementSelected: false
        })

    }

    toggleMainElContainer(parentIndex, e){
        let parentElements  = [].concat(this.state.parentElements);
        parentElements.forEach((parentInLoop, indInLoop) => {
            if(indInLoop === parentIndex){
                parentInLoop.isOpen = !parentInLoop.isOpen;
            }else{
                parentInLoop.isOpen = false;
            }
        });
        this.setState({
            parentElements: parentElements,
            mainElversion: Math.random()
        });
    };

    predefinedPaperSize(width, height){
        this.setState({
            paperWidth: width,
            paperHeight: height,
            customPaperSize: false,
            paperOrientation: 'v'
        });
    }

    onCustomPaperSizeChecked(){
        this.setState({
            customPaperSize: true
        })
    }

    onCustomPaperSizeChange(e){
        let newVal = {};
        newVal[e.target.name] = e.target.value;
        this.setState(newVal);
    }

    onPaperOrientationChange(orientation){
        let oldOrientation = this.state.paperOrientation;
        this.setState({
            paperOrientation: orientation,
            paperWidth: oldOrientation === orientation ? this.state.paperWidth : this.state.paperHeight,
            paperHeight: oldOrientation === orientation ? this.state.paperHeight : this.state.paperWidth,
        });
    }

    printTestOutput(){
        this.setState({
            isPrinting: true,
            isElementSelected: false
        }, () => {
            const input = document.getElementById('paper');
            Html2Canvas(input)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF("p", "mm", "a4");
                    let width = pdf.internal.pageSize.width;
                    let height = pdf.internal.pageSize.height;
                    pdf.addImage(imgData, 'JPEG', 0, 0,width,height);
                    window.open(pdf.output('bloburl'));
                    this.setState({
                        isPrinting: false,
                        isElementSelected: true
                    })
                });
        });
    }

    save(){
        let newState = Object.assign({}, this.state);
        let myjson = JSON.stringify(newState, null, 2);
        let x = window.open();
        x.document.open();
        x.document.write('<html><body><pre>' + myjson + '</pre></body></html>');
        x.document.close();
    }

    onPaperBackgroundChange(e){
        this.setState({
            paperBackground: e.target.value
        })
    }

    canvasElementClicked(canvasItem){
        let parentElements  = [].concat(this.state.parentElements);
        parentElements.forEach((parent) => {
            parent.isOpen = parent.name === canvasItem.parentName;
        });
        this.setState({
            selectedEl: canvasItem,
            isElementSelected: true,
            parentElements: parentElements
        })
    }

    canvasElDragStop(eventEl,e,data){
        if(e.target.classList.contains("designer--canvasEl__remove")){
            this.onSelectedElRemove();
            return;
        }
        let currentEl;
        let newCanvasElements = [];
        this.state.canvasElements.forEach((canvasEl) => {
            if(canvasEl.variableName === eventEl.variableName){
                currentEl = Object.assign({}, canvasEl);
                currentEl.positionX    = data.lastX;
                currentEl.positionY    = data.lastY;
                newCanvasElements.push(currentEl);
            }else{
                newCanvasElements.push(canvasEl);
            }
        });
        let selectedEl = currentEl || this.state.selectedEl;
        let parentElements  = [].concat(this.state.parentElements);
        parentElements.forEach((parent) => {
            parent.isOpen = parent.name === selectedEl.parentName;
        });
        this.setState({
            canvasElements: newCanvasElements,
            selectedEl: selectedEl,
            isElementSelected: true,
            parentElements: parentElements,
            mainElversion: Math.random()
        });
    }

    canvasElResizeStop(eventEl, e, direct, reftoel, delta){
        let deltaX = delta.width;
        let deltaY = delta.height;
        let currentEl;
        let newCanvasElements = [];
        this.state.canvasElements.forEach((canvasEl) => {
            if(canvasEl.variableName === eventEl.variableName){
                currentEl = Object.assign({}, canvasEl);
                currentEl.width    = canvasEl.width  + deltaX;
                currentEl.height   = canvasEl.height + deltaY;
                newCanvasElements.push(currentEl);
            }else{
                newCanvasElements.push(canvasEl);
            }
        });
        this.setState({
            canvasElements: newCanvasElements,
            selectedEl: currentEl || this.state.selectedEl
        });
    }

    mainElDragStop(eventEl, e, data){
        if(e.clientX > 800){
            this.setState({
                mainElversion: Math.random()
            });
            return;
        }
        let draggedX = e.clientX;
        let draggedY = e.clientY;
        let currentEl;
        let currentCanvasElements = this.state.canvasElements;
        this.state.mainElements.forEach((mainEl) => {
            if(mainEl.variableName === eventEl.variableName){
                currentEl = Object.assign({}, Config.componentDefaults);
                currentEl.variableName = mainEl.variableName === "freetext" ? Math.random() : mainEl.variableName;
                currentEl.label        = mainEl.label;
                currentEl.placeHolder  = mainEl.placeHolder;
                currentEl.positionX    = draggedX - this.refs.paper.offsetLeft - 50;
                currentEl.positionY    = draggedY - this.refs.paper.offsetTop - 50;
                currentEl.orderInParent = mainEl.orderInParent;
                currentEl.parentName    = mainEl.parentName;
                currentEl.isFixedTable  = mainEl.isFixedTable;
                currentEl.isFreeText    = mainEl.isFreeText;
                if(currentEl.isFixedTable){
                    currentEl.fields = mainEl.fields;
                }
                currentCanvasElements.push(currentEl);
            }
        });
        let finalEl = currentEl || this.state.selectedEl;
        this.setState({
            canvasElements: currentCanvasElements,
            selectedEl: finalEl,
            isElementSelected: true,
            mainElversion: Math.random()
        });
        //console.log('dragstop',data);
    }
    onDragStart(eventEl,e,data){
        let currentEl;
        let newCanvasElements = [];
        this.state.canvasElements.forEach((canvasEl) => {
            if(canvasEl.variableName === eventEl.variableName){
                currentEl = Object.assign({}, canvasEl);
                newCanvasElements.push(currentEl);
            }else{
                currentEl.disableDragging = false;
                newCanvasElements.push(canvasEl);
            }
        });
        this.setState({
            canvasElements: newCanvasElements,
            selectedEl: currentEl || this.state.selectedEl,
            isElementSelected: true
        });
    }

    toggleTableField(tableField){
        let newTableFields = [];
        this.state.tableFields.forEach((oldTableField) => {
            let newTableField = Object.assign({}, oldTableField);
            if(oldTableField.variableName === tableField.variableName){
                newTableField.checked = !newTableField.checked;
            }
            newTableFields.push(newTableField);
        });
        this.setState({
            tableFields: newTableFields,
            mainElversion: Math.random()
        })
    }

    onTableWidthChange(visibleFields,newWidths){
        console.log(newWidths);
        let newWidthObj = {};
        let currentTableFields = [].concat(this.state.tableFields);
        let nanCount = 0;
        visibleFields.forEach((visibleField, visibleFieldInd) => {
            if(isNaN(newWidths[visibleFieldInd].size)){
                nanCount++;
            }
            newWidthObj[visibleField.variableName] =  visibleField;
            newWidthObj[visibleField.variableName].width = newWidths[visibleFieldInd].size;
        });
        currentTableFields.forEach((tableField) => {
            if(newWidthObj[tableField.variableName]){
                tableField.width = newWidthObj[tableField.variableName].width;
            }
        });
        if(nanCount){
            return;
        }else{
            this.setState({
                tableFields: currentTableFields,
                mainElversion: Math.random()
            })
        }
    }

    onResizing(e){
        let currentTableFields = this.state.tableFields;
        currentTableFields.forEach((field) => {
            if(field.variableName === this.state.currentResizingField){
                field.width = this.state.currentResizingOffset + e.pageX;
            }
        });
        this.setState({
            tableFields: currentTableFields,
            mainElversion: Math.random()
        });
    }

    render() {
        return (
            <div style={{overflow:"hidden", borderBottom:"1px solid black"}} key="app" ref="APP">
                <DesignerHeader
                    paperBackground={this.state.paperBackground}
                    paperWidth={this.state.paperWidth}
                    paperHeight={this.state.paperHeight}
                    paperOrientation={this.state.paperOrientation}
                    onPaperBackgroundChange={this.onPaperBackgroundChange}
                    predefinedPaperSize={this.predefinedPaperSize}
                    onCustomPaperSizeChange={this.onCustomPaperSizeChange}
                    onPaperOrientationChange={this.onPaperOrientationChange}
                    printTestOutput={this.printTestOutput}
                    save={this.props.onSave.bind(null,this.state)}
                    key="header"
                />
                {
                    this.state.isElementSelected &&
                    <DesignerToolbar
                        selectedEl={this.state.selectedEl}
                        onSelectedElPropertyChange={this.onSelectedElPropertyChange}
                        onSelectedElFontWeightChange={this.onSelectedElFontWeightChange}
                        onSelectedElFontStyleChange={this.onSelectedElFontStyleChange}
                        onSelectedElTextAlignChange={this.onSelectedElTextAlignChange}
                        onSelectedElRemove={this.onSelectedElRemove}
                        key="toolbar"
                    />
                }
                <div style={{float:'left', width:"70%", background: 'gray', height:"100%"}}>
                    <div ref="paper" id="paper" className={this.state.isPrinting ? "paper paper--is--printing" : "paper"} style={{position: "relative", width: this.state.paperWidth,  height: this.state.paperHeight, margin:"0 auto", marginTop: "10px", marginBottom: "10px", backgroundColor:"#fff", backgroundSize:"cover"}}>
              <span
                  style={{backgroundImage: "url('"+this.state.paperBackground+"')", backgroundSize: "cover", width: this.state.paperWidth,  height: this.state.paperHeight, position:"absolute", opacity: "0.2"}}>
              </span>
                        <DesignerCanvasElements
                            canvasElements={this.state.canvasElements}
                            selectedEl={this.state.selectedEl}
                            tableFields={this.state.tableFields}
                            canvasElDragStop={this.canvasElDragStop}
                            canvasElResizeStop={this.canvasElResizeStop}
                            canvasElementClicked={this.canvasElementClicked}
                            onSelectedElRemove={this.onSelectedElRemove}
                            isElementSelected={this.state.isElementSelected}
                            onTableWidthChange={this.onTableWidthChange}
                            onResizing={this.onResizing}
                            useDescriptionWithProduct={this.state.useDescriptionWithProduct}
                            ref="canvasElements"
                        />
                    </div>
                </div>
                <div style={{float:'right', width:"30%", height: '600px', background:"#e8e7e7"}}>
                    <DesignerMainElements
                        parentElements={this.state.parentElements}
                        mainElements={this.state.mainElements}
                        canvasElements={this.state.canvasElements}
                        mainElDragStop={this.mainElDragStop}
                        toggleMainElContainer={this.toggleMainElContainer}
                        tableFields={this.state.tableFields}
                        onTableFieldsChange={this.toggleTableField}
                        isElementSelected={this.state.isElementSelected}
                        selectedEl={this.state.selectedEl}
                        onSelectedElPropertyChange={this.onSelectedElPropertyChange}
                        useDescriptionWithProduct={this.state.useDescriptionWithProduct}
                        onDescriptionStatusChange={this.onDescriptionStatusChange}
                        changeFieldOrder={this.changeFieldOrder}
                        mainElVersion={this.state.mainElversion}
                    />
                </div>
            </div>
        );
    }
}

export default Designer;
