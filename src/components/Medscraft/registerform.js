import React, { useState } from "react";
import "../../assets/css/register.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import popup from "../../assets/img/images/popup.jpg";
import Accordion from "react-bootstrap/Accordion";

export default function Registerform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12 overall-div ">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12 inside-form mt-3 ">
            <img src={popup} className=" ml-5 mt-5 form-img" />
            <h2 className="text-primary mt-4 text-center">
              Join For a Good Start
            </h2>

            <h3 className="text-primary mt-3">Start us : </h3>
            <Tabs
              defaultActiveKey="register"
              id="justify-tab-example"
              className="mb-3 mt-4"
              justify
            >
              <Tab eventKey="Doctor" title="Doctor">
                <Form onSubmit={handleSubmit}>
                  <div className=" form-div">
                    <Form.Group controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="Firstname"
                        name="name"
                        className="doctor-form p-2"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formName1">
                      <Form.Control
                        type="text"
                        placeholder="Lastname"
                        name="name"
                        className="doctor-form p-2"
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className=" form-div">
                    <Form.Group controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="Firstname"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formName1">
                      <Form.Control
                        type="text"
                        placeholder="Display Name"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>
                  </div>

                  <div className=" form-div">
                    <Form.Group controlId="formName">
                      <Form.Control
                        type="Email"
                        placeholder="Email"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="Mobile No"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>
                  </div>

                  <div className=" form-div">
                    <Form.Group controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="personal Mobile No"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formName1">
                      <Form.Control
                        type="text"
                        placeholder="Fee Price"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>
                  </div>

                  <div className=" form-div">
                    <Form.Group controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="Registration No"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formName1">
                      <Form.Control
                        type="text"
                        placeholder="Address 1"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>
                  </div>

                  <div className=" form-div">
                    <Form.Group controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="Address 2"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formName1">
                      <Form.Select
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      >
                        <option value="">Select state</option>
                        <option value="lastname1">tamil nadu</option>
                        <option value="lastname2">kerala</option>
                        <option value="lastname3">karnataka</option>
                      </Form.Select>
                    </Form.Group>
                  </div>

                  <div className=" form-div">
                    <Form.Group controlId="formName1">
                      <Form.Select
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      >
                        <option value="">Select city</option>
                        <option value="lastname1">Bengaluru</option>
                        <option value="lastname2">Lastname 2</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formName1">
                      <Form.Control
                        type="text"
                        placeholder="Specific Area Name"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>
                  </div>
                  <Form.Group controlId="formFile1" className="mb-3">
                    <Form.Control
                      type="file"
                      name="file"
                      className="file-upload p-2 mt-2"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formTextarea1" className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      placeholder="Describe Your Self"
                      className="message-box p-5 mt-2"
                      required
                    />
                  </Form.Group>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Doctor Photos</Accordion.Header>
                      <Accordion.Body>
                        <Form.Label className="text-primary">
                          Upload Doctor Photos
                        </Form.Label>
                        <Form.Control
                          type="file"
                          name="file"
                          className="file-upload p-2 mt-2"
                          required
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Form.Group controlId="formCheckbox1" className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="  Consectetur Adipisicing Elit Sed Do Eiusmod Tempor
                    Incididunt Ut Labore Et Dolore Magna Aliqua Enim Ad Minim
                    Veniam Quis. Terms & Condition"
                      name="terms"
                      className="doctor-form2 p-2 mt-2"
                      required
                    />
                  </Form.Group>

                 

                  <Button variant="primary" type="submit" className="mt-3">
                    Signup today
                  </Button>
                </Form>
              </Tab>

              <Tab eventKey="clinic" title="clinic">
                <Form>
                  <div className=" form-div">
                    <Form.Group controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="Clinicname"
                        name="name"
                        className="doctor-form p-2"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formName1">
                      <Form.Control
                        type="text"
                        placeholder="mobileno"
                        name="name"
                        className="doctor-form p-2"
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className=" form-div">
                    <Form.Group controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="personal Mobile No"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formName1">
                      <Form.Control
                        type="text"
                        placeholder="Fee Price"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>
                  </div>

                  <div className=" form-div">
                    <Form.Group controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="Clinic Registration No"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formName1">
                      <Form.Control
                        type="text"
                        placeholder="Address 1"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>
                  </div>

                  <div className=" form-div">
                    <Form.Group controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="Address 2"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formName1">
                      <Form.Select
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      >
                        <option value="">Select state</option>
                        <option value="lastname1">tamil nadu</option>
                        <option value="lastname2">kerala</option>
                        <option value="lastname3">karnataka</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className=" form-div">
                    <Form.Group controlId="formName1">
                      <Form.Select
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      >
                        <option value="">Select city</option>
                        <option value="lastname1">Bengaluru</option>
                        <option value="lastname2">Lastname 2</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formName1">
                      <Form.Control
                        type="text"
                        placeholder="Specific Area Name"
                        name="name"
                        className="doctor-form p-2 mt-2"
                        required
                      />
                    </Form.Group>
                  </div>
                  <Form.Group controlId="formFile1" className="mb-3">
                    <Form.Control
                      type="file"
                      name="file"
                      className="file-upload p-2 mt-2"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formFile1" className="mb-3">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Clinic Photos</Accordion.Header>
                        <Accordion.Body>
                          <Form.Label className="text-primary">
                            Upload Clinic Photos
                          </Form.Label>
                          <Form.Control
                            type="file"
                            name="file"
                            className="file-upload p-2 mt-2"
                            required
                          />
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Form.Group>

                  <Form.Group controlId="formCheckbox1" className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="  Consectetur Adipisicing Elit Sed Do Eiusmod Tempor
                    Incididunt Ut Labore Et Dolore Magna Aliqua Enim Ad Minim
                    Veniam Quis. Terms & Condition"
                      name="terms"
                      className="doctor-form2 p-2 mt-2"
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="mt-3">
                    Signup today
                  </Button>
                </Form>
              </Tab>

              <Tab eventKey="patient" title="patient">
                <p className="text-danger">Comming Soon....</p>
                <Form.Group controlId="formCheckbox1" className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="  Consectetur Adipisicing Elit Sed Do Eiusmod Tempor
                    Incididunt Ut Labore Et Dolore Magna Aliqua Enim Ad Minim
                    Veniam Quis. Terms & Condition"
                      name="terms"
                      className="doctor-form2 p-2 mt-2"
                      required
                    />
                  </Form.Group>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}