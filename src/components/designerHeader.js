/**
 * Created by mehmetyurtar on 31/08/2017.
 */
import React from 'react';

class DesignerToolbar extends React.Component {
    render(){
        return (
            <div style={{width:"100%", background:"#fbfbfb", paddingLeft:"10px", overflow: "hidden",height: "40px",lineHeight:"40px"}}>
                <div className="designer--page__title" style={{display:'inline-block', float:"left", width:"20%"}}>Fatura Sablonu</div>
                <div className="designer--page__toolbar" style={{display:'inline-block', float:"right", width:"80%"}}>
                    <ul style={{listStyle: "none", padding:0, margin:0}}>
                        <li className="designer--page__toolbar--item__container">
                            <span>Background Url: </span>
                            <input type="text" key="background" value={this.props.paperBackground} onChange={this.props.onPaperBackgroundChange}/>
                        </li>
                        <li className="designer--page__toolbar--item__container">
                            <span style={{marginRight: "5px"}}>Kagit Boyutu: </span>
                            <span className="designer--page--size__container">
                              <span
                                  className={
                                      this.props.paperWidth ===  595 && this.props.paperHeight === 842 ? "designer--page--size designer--page--size__selected" : "designer--page--size"}
                                  onClick={this.props.predefinedPaperSize.bind(null, 595, 842)}>
                                  A4
                              </span>
                          </span>
                            <span className="designer--page--size__container">
                              <span
                                  className={this.props.paperWidth ===  420 && this.props.paperHeight === 595 ? "designer--page--size designer--page--size__selected" : "designer--page--size"}
                                  onClick={this.props.predefinedPaperSize.bind(null, 420, 595)}>
                                  A5
                              </span>
                          </span>
                            <span className="designer--page--size__container">
                              <span className="designer--page--size__spec">
                                  <input type="text" name="paperWidth" value={this.props.paperWidth} onChange={this.props.onCustomPaperSizeChange}/>
                                  px
                              </span>
                              <span style={{marginLeft: "10px"}}>x</span>
                              <span className="designer--page--size__spec">
                                  <input type="text" name="paperWidth" value={this.props.paperHeight} onChange={this.props.onCustomPaperSizeChange}/>
                                  px
                              </span>
                          </span>
                        </li>
                        <li className="designer--page__toolbar--item__container">
                          <span
                              className={this.props.paperOrientation === "v" ? "designer--page--orientation designer--page__v selected" : "designer--page--orientation designer--page__v"}
                              onClick={this.props.onPaperOrientationChange.bind(null, "v")}
                          >
                          </span>
                            <span
                                className={this.props.paperOrientation === "h" ? "designer--page--orientation designer--page__h selected" : "designer--page--orientation designer--page__h"}
                                onClick={this.props.onPaperOrientationChange.bind(null,'h')}
                            >
                          </span>

                        </li>
                        <li className="designer--page__toolbar--item__container">
                            <button onClick={this.props.printTestOutput}>Test Ciktisi Yazdir</button>
                        </li>
                        <li className="designer--page__toolbar--item__container">
                            <button onClick={this.props.save}>Kaydet</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default DesignerToolbar;