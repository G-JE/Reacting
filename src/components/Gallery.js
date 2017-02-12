import React from 'react'
import { ReactDOM } from 'react'
import DOM from 'react-dom'
import { connect } from 'react-redux'

class Gallery extends React.Component {

    render() {

      let images = this.props.Library.images;

      let gall = images.map((image, i) => {
        let style
            if (image.width > image.height) {
                style = {
                    width: "100%",
                    objectFit: "contain"
                }
            }

            else {
                style = {
                    height: "100%",
                    width: "auto",
                    objectFit: "contain"
                }
            }

            return (
                <div key={i} className="image_wrapper">
                    <div className="gallery_item">
                        <div>
                            <img title={image.name} src={image.url} style={style} />
                            <p> {image.name} </p>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="gallery">
                {gall}
            </div>
        )
    }
}

export default Gallery