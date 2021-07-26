/* eslint-disable no-unused-vars */
import React from "react";
import { Formik, Form, Field } from "formik";
import WraperModal from "../../component/WraperModal";
import Button from "../../component/Button";
import Textarea from "../../component/Textarea";

import "./style.scss";

export default function ModalEditText({ show, setShow, value }) { 
 
    return(
        <WraperModal setShow={setShow} show={show} title="ИЗМЕНИТЬ ТЕКСТ" modal="wraper">
            <Formik
                initialValues={{
                    text: value,
                }}
                onSubmit={(values) => {
                    console.log(values);
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