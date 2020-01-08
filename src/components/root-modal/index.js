import React, { Component } from "react"
import Modal from "react-responsive-modal"
import classNames from "classnames"

export default class RootModal extends Component {
  componentDidMount() {
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }
  render() {
    const { classNames: modalClasses, styles, ...restProps } = this.props
    return (
      <Modal
        classNames={{
          ...modalClasses,
          modal: classNames("root-modal", modalClasses.modal),
          overlay: classNames("root-modal-overlay", modalClasses.overlay),
        }}
        {...restProps}
      >
        {this.props.children}
      </Modal>
    )
  }
}
