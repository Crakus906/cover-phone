/* eslint-disable no-unused-vars */
import React from "react";
import { Formik, Form, Field } from "formik";
import WraperModal from "../../component/WraperModal";
import Button from "../../component/Button";
import Textarea from "../../component/Textarea";

import "./style.scss";

export default function ModalAdText({ show, setShow, setText, text }) { 

    const handleSubmit = (values) => {
        setText([...text, values]);
        setShow(!show);
    };
 
    return(
        <WraperModal setShow={setShow} show={show} title="СОЗДАТЬ ТЕКСТ" modal="wraper">
            <Formik
                initialValues={{
                    text: ""
                }}
                onSubmit={(values) => {
                    handleSubmit(values);
                }}
            >

                <Form>
                    <Textarea name="text" type="text" placeholder="Начинайте вводить текст" />
                    <div className="bottom-modal">
                        <Button
                            className="close"
                            onClick={() => setShow(!show)}
                        >
                            отменить
                        </Button>
                        <Button 
                            className="create"
                        >
                            создать
                        </Button>
                    </div>
                </Form>
            </Formik>
        </WraperModal>
    );
}