/**
 * Created by mehmetyurtar on 29/07/2017.
 */
import React from 'react';

class DesignerToolbar extends React.Component {
    render(){
        return (
            <ul className="designer--toolbar">
                <li className="designer--toolbar--name">{this.props.selectedEl.label}</li>
                <li className="designer--toolbar--item__container">
                    <span className="designer--toolbar--item designer--toolbar__fontsize">
                        <input key="fontSize" type="text" name="fontSize" value={this.props.selectedEl.fontSize} onChange={this.props.onSelectedElPropertyChange} />
                        <span>px</span>
                    </span>
                </li>
                <li className="designer--toolbar--item__container">
                    <span className="designer--toolbar--item">
                        <select name="fontFamily" value={this.props.selectedEl.fontFamily} onChange={this.props.onSelectedElPropertyChange}>
                            <option value="Pt Sans" style={{fontFamily:"'PT Sans', sans-serif"}}>Tirnaksiz</option>
                            <option value="Pt Serif" style={{fontFamily:"'PT Serif', serif"}}>Tirnakli</option>
                            <option value="Ubuntu Mono" style={{fontFamily:"'Ubuntu Mono', monospace"}}>Es Aralikli</option>
                        </select>
                    </span>
                </li>
                <li className="designer--toolbar--item__container">
                    <span className="designer--toolbar--item designer--toolbar__fontStyle">
                        <span onClick={this.props.onSelectedElFontWeightChange}
                              className={this.props.selectedEl.fontWeight === "bold" ? " designer--toolbar__f designer--toolbar__f--first designer--toolbar--fselected" : "designer--toolbar__f designer--toolbar__f--first"}>
                            <i className="fa fa-bold"></i>
                        </span>
                        <span onClick={this.props.onSelectedElFontStyleChange}
                              className={this.props.selectedEl.fontStyle  === "italic" ? "designer--toolbar__f designer--toolbar--fselected" : "designer--toolbar__f"}>
                            <i className="fa fa-italic"></i>
                        </span>
                    </span>
                </li>
                <li className="designer--toolbar--item__container">
                    <span className="designer--toolbar--item designer--toolbar__fontStyle">
                        <span onClick={this.props.onSelectedElTextAlignChange.bind(this,"left")}
                              className={this.props.selectedEl.textAlign === "left" ? " designer--toolbar__f designer--toolbar__f--first designer--toolbar--fselected" : "designer--toolbar__f designer--toolbar__f--first"}>
                            <i className="fa fa-align-left"></i>
                        </span>
                        <span onClick={this.props.onSelectedElTextAlignChange.bind(this, "center")}
                              className={this.props.selectedEl.textAlign  === "center" ? "designer--toolbar__f designer--toolbar--fselected" : "designer--toolbar__f"}>
                            <i className="fa fa-align-center"></i>
                        </span>
                        <span onClick={this.props.onSelectedElTextAlignChange.bind(this, "right")}
                              className={this.props.selectedEl.textAlign  === "right" ? "designer--toolbar__f designer--toolbar--fselected" : "designer--toolbar__f"}>
                            <i className="fa fa-align-right"></i>
                        </span>
                    </span>
                </li>
                <li className="designer--toolbar--item__container">
                    <span className="designer--toolbar--item designer--toolbar__fontsize">
                        <span className="designer--toolbar--item__label">SOLDAN</span>
                        <input type="text" name="positionX" value={this.props.selectedEl.positionX} onChange={this.props.onSelectedElPropertyChange} />
                        <span>px</span>
                    </span>
                </li>
                <li className="designer--toolbar--item__container">
                    <span className="designer--toolbar--item designer--toolbar__fontsize">
                        <span className="designer--toolbar--item__label">USTTEN</span>
                        <input type="text" name="positionY" value={this.props.selectedEl.positionY} onChange={this.props.onSelectedElPropertyChange} />
                        <span>px</span>
                    </span>
                </li>
                <li className="designer--toolbar--item__container">
                    <span className="designer--toolbar--item designer--toolbar__fontsize">
                        <span className="designer--toolbar--item__label">GENISLIK</span>
                        <input type="text" name="width" value={this.props.selectedEl.width} onChange={this.props.onSelectedElPropertyChange} />
                        <span>px</span>
                    </span>
                </li>
                <li className="designer--toolbar--item__container">
                    <span className="designer--toolbar--item designer--toolbar__fontsize">
                        <span className="designer--toolbar--item__label">YUKSEKLIK</span>
                        <input type="text" name="height" value={this.props.selectedEl.height} onChange={this.props.onSelectedElPropertyChange} />
                        <span>px</span>
                    </span>
                </li>
                <li className="designer--toolbar--item__container">
                    <span className="designer--toolbar--item designer--toolbar__trash">
                        <span onClick={this.props.onSelectedElRemove.bind(this)}
                              className="designer--toolbar__f designer--toolbar__f--first">
                            <i className="fa fa-trash"></i>
                        </span>
                    </span>
                </li>
            </ul>
        )
    }
}

export default DesignerToolbar;