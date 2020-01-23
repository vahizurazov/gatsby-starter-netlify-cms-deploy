import React, { Component } from "react";
import classnames from "classnames";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaKey = process.env.GATSBY_RECAPTCHA_KEY || null;

//label of require
const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

//label constructor
const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

//Input construct use Label
export const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    "field-input",
    {
      "animated error": !!error
    },
    className
  );

  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};

//Textarea construct use Label
export const TextAreaInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    "field-input field-full-width",
    {
      "animated pulse error": !!error
    },
    className
  );

  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <textarea
        id={id}
        className="contact-message"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      {/* <InputFeedback error={error} /> */}
    </div>
  );
};

// recaptcha
export class ReCaptchaForm extends Component {
  constructor(props) {
    super(props);
  }

  // render on captcha load
  handleCaptchaLoad(event) {
    console.log("handleCaptchaLoad");
  }

  // load on callback verify
  verifyCallback(event) {
    console.log("verifyCallback-->", event);
  }

  render() {
    const {
      label,
      error,
      value,
      setFieldValue,
      onChange,
      onBlur,
      className
    } = this.props;
    const classes = classnames(
      "recaptcha-required",
      {
        "animated error": !!error
      },
      className
    );
    console.log("onChange", onChange);
    return (
      <div className={classes}>
        <Label error={error}>{label}</Label>
        <div
          // id="captcha-holder"
          className="modal-recaptcha"
          value={value}
          onChange={onChange}
          {...this.props}
        >
          <ReCAPTCHA
            // elementId="gf-recaptcha"
            sitekey={recaptchaKey}
            onChange={onChange}
          />
          {/* <Recaptcha
            elementID="gf-recaptcha"
            sitekey={recaptchaKey}
            render="explicit"
            theme="white"
            verifyCallback={this.verifyCallback}
            onloadCallback={this.handleCaptchaLoad}
            verifyCallback={response => {
                setFieldValue("recaptcha", response);
              }} 
             onloadCallback={() => {}}
          /> */}
          {/* <InputFeedback error={error} /> */}
        </div>
      </div>
    );
  }
}
