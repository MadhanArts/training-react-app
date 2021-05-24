import React, {useEffect, useState} from "react";
import axios from "axios";

function CRUDForm() {
    const [humans, setHumans] = useState([]);

    const [human, setHuman] = useState({
        name: "",
        tech: "",
        sub: false,
    });

    const [patchId, setPatchId] = useState("");

    const [patchBody, setPatchBody] = useState({
        sub: false,
    });

    const [deleteId, setDeleteId] = useState("");

    const getHumans = () => {
        // crossdomain: true
        axios
            .get("http://localhost:5000/humans")
            .then((response) => {
                console.log(response);
                setHumans(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getHumans();
    }, []);

    const handlePostSubmit = (event) => {
        event.preventDefault();
        console.log(human);
        axios
            .post("http://localhost:5000/humans", human)
            .then((response) => {
                getHumans();
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handlePatchSubmit = (event) => {
        event.preventDefault();
        axios
            .patch("http://localhost:5000/humans/" + patchId, patchBody)
            .then((response) => {
                getHumans();
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Error : " + error);
            });
    };

    const handleDeleteSubmit = (event) => {
        event.preventDefault();
        axios
            .delete("http://localhost:5000/humans/" + deleteId)
            .then((response) => {
                getHumans();
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Error : " + error);
            });
    };

    return (
        <div>
            <div className='post-human'>
                <h2>Post Form </h2>
                <form onSubmit={handlePostSubmit}>
                    Name :{" "}
                    <input
                        type='text'
                        name='name'
                        value={human.name}
                        onChange={(e) =>
                            setHuman({...human, name: e.target.value})
                        }
                        required
                    />{" "}
                    <br />
                    Technology :{" "}
                    <input
                        type='text'
                        name='tech'
                        value={human.tech}
                        onChange={(e) =>
                            setHuman({...human, tech: e.target.value})
                        }
                        required
                    />{" "}
                    <br />
                    Subscriber : <br />
                    <label>
                        <input
                            type='radio'
                            name='sub'
                            value={human.sub}
                            onChange={(e) => setHuman({...human, sub: true})}
                        />{" "}
                        True <br />
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='sub'
                            value={human.sub}
                            onChange={(e) => setHuman({...human, sub: false})}
                            defaultChecked
                        />{" "}
                        False <br />
                    </label>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <hr />
            <div className='patch-human'>
                <h2>Patch Form </h2>
                <form onSubmit={handlePatchSubmit}>
                    ID :
                    <input
                        type='text'
                        value={patchId}
                        onChange={(event) => setPatchId(event.target.value)}
                    />{" "}
                    <br />
                    Subscriber : <br />
                    <label>
                        <input
                            type='radio'
                            name='sub'
                            value={patchBody.sub}
                            onChange={(e) => setPatchBody({sub: true})}
                        />{" "}
                        True <br />
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='sub'
                            value={patchBody.sub}
                            onChange={(e) => setPatchBody({sub: false})}
                            defaultChecked
                        />{" "}
                        False <br />
                    </label>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <hr />
            <div className='delete-human'>
                <h2>Delete Form </h2>
                <form onSubmit={handleDeleteSubmit}>
                    ID :
                    <input
                        type='text'
                        value={deleteId}
                        onChange={(event) => setDeleteId(event.target.value)}
                    />{" "}
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div className='get-humans'>
                {humans.map((human, index) => {
                    return (
                        <div
                            style={{
                                // width: '200px',
                                border: "2px solid #000",
                            }}
                            key={index}>
                            {human._id} <br />
                            {human.name} <br />
                            {human.tech} <br />
                            {human.sub ? "True" : "False"}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CRUDForm;
