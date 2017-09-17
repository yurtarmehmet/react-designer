    /**
     * Created by mehmetyurtar on 29/07/2017.
     */
    import React from 'react';
    import Rnd from 'react-rnd';


    class DesignerMainElements extends React.Component {
        render(){
            let isEditingText = this.props.isElementSelected && this.props.selectedEl && this.props.selectedEl.isFreeText;
            let useDescriptionWithProduct = this.props.useDescriptionWithProduct;
            return (
                <div key={this.props.mainElVersion}>
                    {
                        this.props.parentElements.map((parentElement, parentIndex) => {
                            let children = [];
                            let canvasElementVariables = [];
                            let isFixedOnTable = false;
                            this.props.canvasElements.forEach((canvasElement) => {
                                if(canvasElement.isFixedTable){
                                    isFixedOnTable = true;
                                }
                                canvasElementVariables.push(canvasElement.variableName);
                            });
                            this.props.mainElements.forEach((mainEl, mainElIndex) => {
                                if((mainEl.parentName === parentElement.name) && (canvasElementVariables.indexOf(mainEl.variableName) === -1)){
                                    children.push(mainEl);
                                }
                            });
                            if(parentElement.isFixedTable && isFixedOnTable){
                                children = [];
                                this.props.tableFields.sort(function(a, b) {
                                    return parseInt(a.order) - parseInt(b.order);
                                });
                                this.props.tableFields.forEach((field) => {
                                   if(field.variableName === "description"){
                                       if(!useDescriptionWithProduct){
                                           children.push(field);
                                       }
                                   }else{
                                       children.push(field);
                                   }
                                });
                            }

                            return(
                                <div>
                                    <div className="designer--accordion">
                                        <div className="designer--accordion__title" onClick={this.props.toggleMainElContainer.bind(null, parentIndex)}>
                                            <span>{parentElement.label}</span>
                                            <span className="designer--accordion__icon"><i className={parentElement.isOpen ? "fa fa-chevron-up" : "fa fa-chevron-down"}></i></span>
                                        </div>
                                        {
                                            parentElement.isFixedTable && parentElement.isOpen && isFixedOnTable  ?
                                                <div className="designer--accordion__content" style={{height: children.length*40}}>
                                                    {
                                                        children.map((mainElement, mainElIndex) => {
                                                            let enableResizing = {
                                                                bottom: false,
                                                                bottomLeft: false,
                                                                bottomRight: false,
                                                                left: false,
                                                                right: false,
                                                                top: false,
                                                                topLeft: false,
                                                                topRight: false
                                                            };
                                                            let yPosition = ((mainElIndex * 40));
                                                            if(parentIndex !== 0){
                                                                // yPosition += ((parentIndex) * 40);
                                                            }
                                                            return<Rnd
                                                                default={{
                                                                    x: 0,
                                                                    y: yPosition
                                                                }}
                                                                className= "designer--mainEl--container"
                                                                onDragStop={this.props.mainElDragStop.bind(null, mainElement)}
                                                                enableResizing={enableResizing}
                                                                disableDragging={true}
                                                            >
                                                                <div className="designer--mainEl">
                                                                    <span className="designer--mainEl__checkbox">
                                                                        <input type="checkbox" checked={mainElement.checked} onChange={this.props.onTableFieldsChange.bind(null, mainElement)}/>
                                                                    </span>
                                                                    <span className="designer--mainEl__label">
                                                                        {mainElement.label}
                                                                        {mainElement.variableName === "serviceorproduct" && <span style={{fontSize:"12px", position:"relative", left:"5px"}}>(Açıklama ile birlikte? <input type="checkbox" checked={this.props.useDescriptionWithProduct} onChange={this.props.onDescriptionStatusChange}/>)</span>}
                                                                        <span className="drag-icons"><i className={mainElement.order !== children[children.length -1].order ? "fa fa-arrow-down" : "fa fa-arrow-down drag-icon--hidden"} onClick={this.props.changeFieldOrder.bind(null,mainElement.variableName, "after")}></i> <i className={mainElement.order !== 0 ? "fa fa-arrow-up" : "fa fa-arrow-up drag-icon--hidden"} onClick={this.props.changeFieldOrder.bind(null,mainElement.variableName, "before")}></i></span>
                                                                    </span>
                                                                </div>
                                                            </Rnd>
                                                        })
                                                    }
                                                </div>
                                                :
                                            parentElement.isOpen &&
                                                <div className="designer--accordion__content" style={{height: children.length*40}}>
                                                    { children.map((mainElement, mainElIndex) => {
                                                        let enableResizing = {
                                                            bottom: false,
                                                            bottomLeft: false,
                                                            bottomRight: false,
                                                            left: false,
                                                            right: false,
                                                            top: false,
                                                            topLeft: false,
                                                            topRight: <false></false>
                                                        };
                                                        let yPosition = ((mainElIndex * 40));
                                                        if(parentIndex !== 0){
                                                           // yPosition += ((parentIndex) * 40);
                                                        }
                                                            return <Rnd
                                                                default={{
                                                                    x: 0,
                                                                    y: yPosition
                                                                }}
                                                                className= "designer--mainEl--container"
                                                                onDragStop={this.props.mainElDragStop.bind(null, mainElement)}
                                                                enableResizing={enableResizing}
                                                                key={mainElement.variableName}
                                                            >
                                                                <div className="designer--mainEl">
                                                                    <i className={"designer--mainEl__icon fa fa-"+ mainElement.icon}></i>
                                                                    <span className="designer--mainEl__label">{mainElement.label}</span>
                                                                </div>
                                                            </Rnd>
                                                    })
                                                    }
                                                </div>
                                        }
                                    </div>

                                </div>
                            )
                        })
                    }
                    {isEditingText &&
                    <textarea key={this.props.selectedEl.variableName} name="placeHolder" id="" cols="30" rows="10" style={{margin:"2% 7%", display:"block", width:"86%", marginTop:"20px"}} defaultValue={this.props.selectedEl.placeHolder} onChange={this.props.onSelectedElPropertyChange} ></textarea>}
                </div>
            )
        }
    }

    export default DesignerMainElements;