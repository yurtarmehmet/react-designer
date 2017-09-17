/**
 * Created by mehmetyurtar on 31/08/2017.
 */
import React from 'react';
import Rnd from 'react-rnd';
import PanelGroup from 'react-panelgroup';


class DesignerCanvasElements extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){

    }


    render(){
        let info = [];
        let totalWidth = 0;
        let panelWidths = [];
        let visibleFields = [];
        this.props.tableFields.sort(function(a, b) {
            return parseInt(a.order) - parseInt(b.order);
        });

        this.props.tableFields.forEach((tableField) => {
            if(tableField.checked){
                totalWidth += tableField.width;
                visibleFields.push(tableField);
            }
        });
        visibleFields.forEach((tableField, tableFieldInd) => {
            let resize = "stretch";
            if(tableFieldInd === 0 || tableFieldInd === visibleFields.length - 1){
                resize = "dynamic";
                panelWidths.push({size: tableField.width, minSize:20, resize: resize})
            }else{
                panelWidths.push({ size: tableField.width, minSize:20, resize: resize})
            }
        });
        return (
            <div>
                { this.props.canvasElements.map((canvasItem) => {
                    if(canvasItem.isFixedTable){
                        return(
                            <Rnd
                                className={this.props.selectedEl.variableName === canvasItem.variableName ? "designer--canvasEl designer--canvasEl__table designer--canvasEl__selected" : "designer--canvasEl designer--canvasEl__table"}
                                default={{x: canvasItem.positionX,y: canvasItem.positionY, width: totalWidth + ((visibleFields.length-1)),textAlign:"center"}}
                                onDragStop={this.props.canvasElDragStop.bind(null,canvasItem)}
                                onDragStart={this.props.canvasElDragStart}
                                disableDragging={false}
                                key={canvasItem.variableName}
                            >
                        <div style={{
                            fontSize: canvasItem.fontSize+"px",
                            fontFamily: canvasItem.fontFamily,
                            fontStyle: canvasItem.fontStyle,
                            fontWeight: canvasItem.fontWeight,
                            textAlign: canvasItem.textAlign
                        }}>
                            <PanelGroup borderColor="#27c8a3" panelWidths={panelWidths} minSize={totalWidth + ((visibleFields.length-1))}  spacing={1} onUpdate={this.props.onTableWidthChange.bind(null, visibleFields)}>
                                {
                                    visibleFields.map((tableField, tableFieldInd) => {
                                        let inner = <div>{tableField.labelOnTable}</div>;
                                        if(tableField.variableName === "serviceorproduct" && this.props.useDescriptionWithProduct){
                                            inner = <div>{tableField.labelOnTable}<span style={{display:"block"}}>{tableField.descOnTable}</span></div>;
                                        }
                                        return <div ref={tableField.variableName} key={tableField.variableName} style={{
                                            fontSize: canvasItem.fontSize+"px",
                                            fontFamily: canvasItem.fontFamily,
                                            fontStyle: canvasItem.fontStyle,
                                            fontWeight: canvasItem.fontWeight,
                                            textAlign: canvasItem.textAlign
                                        }}>
                                            <div className="designer--canvasEl__table__inner">{inner}</div>
                                            <div className="designer--canvasEl__table__inner">{inner}</div>
                                            <div className="designer--canvasEl__table__inner">{inner}</div>
                                            <div className="designer--canvasEl__table__inner">{inner}</div>
                                            <div className="designer--canvasEl__table__inner">{inner}</div>
                                            <div className="designer--canvasEl__table__inner">{inner}</div>
                                            <div className="designer--canvasEl__table__inner">{inner}</div>
                                        </div>
                                    })
                                }
                            </PanelGroup>
                        </div>
                            </Rnd>);
                    }else{
                        let getResizing = (selected) => {
                            return {
                                bottom: true,
                                bottomLeft: true,
                                bottomRight: true,
                                left: true,
                                right: true,
                                top: true,
                                topLeft: true,
                                topRight: !selected
                            };
                        };
                        return <div key={canvasItem.variableName} onClick={this.props.canvasElementClicked.bind(this, canvasItem)}>
                            <Rnd
                                className={this.props.selectedEl.variableName === canvasItem.variableName ? "designer--canvasEl designer--canvasEl__selected" : "designer--canvasEl"}
                                default={{x: canvasItem.positionX,y: canvasItem.positionY, width: canvasItem.width, height: canvasItem.height,textAlign:"center"}}
                                onDragStop={this.props.canvasElDragStop.bind(null,canvasItem)}
                                onResizeStop={this.props.canvasElResizeStop.bind(null, canvasItem)}
                                bounds=".paper"
                                enableResizing={getResizing(this.props.selectedEl.variableName === canvasItem.variableName)}
                            >
                                {
                                    this.props.selectedEl.variableName === canvasItem.variableName && this.props.isElementSelected && <span className="designer--canvasEl__remove" onClick={this.props.onSelectedElRemove}>X</span>
                                }
                                <div
                                    style={{
                                        fontSize: canvasItem.fontSize+"px",
                                        fontFamily: canvasItem.fontFamily,
                                        fontStyle: canvasItem.fontStyle,
                                        fontWeight: canvasItem.fontWeight,
                                        textAlign: canvasItem.textAlign
                                    }}>
                                    {canvasItem.placeHolder}
                                </div>
                            </Rnd>
                        </div>
                    }
                })
                }
            </div>
        )}}

export default DesignerCanvasElements;