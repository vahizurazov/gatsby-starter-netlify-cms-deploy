import React from "react"
import classnames from "classnames"
import Recaptcha from "react-recaptcha"
const recaptchaKey = process.env.GATSBY_RECAPTCHA_KEY || null
//label of require
const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null
//label constructor
const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  )
}

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
      "animated error": !!error,
    },
    className
  )
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
  )
}

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
      "animated pulse error": !!error,
    },
    className
  )
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
  )
}

//recaptcha
export const ReCaptcha = ({
  label,
  error,
  value,
  onChange,
  className,
  setFieldValue,
  ...props
}) => {
  const classes = classnames(
    "recaptcha-required",
    {
      "animated error": !!error,
    },
    className
  )
  return (
    <div className={classes}>
      <Label error={error}>{label}</Label>
      <div
        className="modal-recaptcha"
        value={value}
        onChange={onChange}
        {...props}
      >
        <Recaptcha
          sitekey={recaptchaKey}
          render="explicit"
          theme="white"
          verifyCallback={response => {
            setFieldValue("recaptcha", response)
          }}
          onloadCallback={() => {}}
        />
        <InputFeedback error={error} />
      </div>
    </div>
  )
}
