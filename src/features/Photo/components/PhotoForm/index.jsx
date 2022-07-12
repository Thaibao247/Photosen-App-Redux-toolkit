import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Button, Spinner } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../global/global_categoryPhoto";
import { FastField, Form, Formik } from "formik";
import InputField from "../../../../custom-field/InputField/inputField";
import SelectField from "../../../../custom-field/SelectField/selectField";
import RandomPhotoField from "../../../../custom-field/RandomPhotoFIeld";
//import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};
PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const { initialValues, isEditMode } = props;
  // const initialValues = {
  //   title: "",
  //   categoryId: null,
  //   photo: "",
  // };

  const schema = yup.object().shape({
    title: yup.string().required("This field is required!"),

    categoryId: yup.number().required("this field is required").nullable(),

    photo: yup.string().required("This field is required!"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={schema}
    >
      {(formikProps) => {
        const { value, errors, touched, isSubmitting } = formikProps;
        console.log(value, errors, touched);
        return (
          <Form>
            {/* Chỉ re-render khi tác động đến field này (xài field khi các field liên quan đến nhau) */}
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg. Wow nature..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="categoryId"
              placeholder="What's your photo category"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            {/* RandomPhoto by customField
              Props:
              -name
              -imageUrl (value)
              -onImageUrlChange (onChange)
              -onRandomButtonBlur (onBlur)
            */}

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color="primary">
                {isSubmitting && <Spinner size="sm" />}
                {!isEditMode ? "Add to album" : "Edit photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
