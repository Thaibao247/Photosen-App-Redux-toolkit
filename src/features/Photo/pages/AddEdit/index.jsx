import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import { addPhoto, updatePhoto } from "../../photoSlice";
import { useSelector } from "react-redux";

import "./styles.scss";
function AddEdit(props) {
  const imageUrl =
    "https://png.pngtree.com/thumb_back/fw800/back_our/20190617/ourmid/pngtree-pink-petals-gradient-white-banner-background-image_129703.jpg";
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;
  const editPhoto = useSelector((state) => {
    const foundPhoto = state.photos.find((x) => x.id === +photoId);
    return foundPhoto;
  });

  const initialValue = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: Math.trunc(Math.random() * 10000),
          };
          const action = addPhoto(newPhoto);
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }
        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };
  return (
    <div className="add-edit">
      <Banner title="Hello VietNam" backgroundUrl={imageUrl} />
      <div className="add-edit__form">
        <PhotoForm
          onSubmit={handleSubmit}
          initialValues={initialValue}
          isEditMode={!isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEdit;
