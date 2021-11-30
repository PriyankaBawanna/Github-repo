import React, { useEffect, useState } from "react";
import "../Style/style.css";
const DemoUser = () => {
  const [user, setUser] = useState<any>({});
  const [userInput, setSearchInput] = useState("");
  const [repo, setRepo] = useState<any>([]);

  const getUser = async () => {
    console.log("chechk user input", userInput);
    const response = await fetch(`https://api.github.com/users/${userInput}`);

    const parsedResponse = await response.json();
    console.log("Checking Parsed Response", parsedResponse);

    console.log("chechk user input", userInput);
    const responserepo = await fetch(
      `https://api.github.com/users/${userInput}/repos`
    );

    const parsedResponseRepo = await responserepo.json();
    console.log("Checking Parsed Repo Response", parsedResponseRepo);
    setRepo(parsedResponseRepo);
    setUser(parsedResponse);
  };

  const getUserrepo = async () => {
    console.log("chechk user input", userInput);
    const response = await fetch(
      `https://api.github.com/users/${userInput}/repos`
    );

    const parsedResponseRepo = await response.json();
    console.log("Checking Parsed Repo Response", parsedResponseRepo);
    setRepo(parsedResponseRepo);
  };
  const _renderRepo = () => {
    return repo.map((item: any, index: any) => {
      return (
        <div className="UserRepo">
          <p key={item.id}>
            <b>User_id :</b> {item.id}
          </p>

          <p>
            <b>node_id: </b>
            {item.node_id}
          </p>
          <p>
            <b>name: </b>
            {item.name}
          </p>
          <p>
            <b>full_name : </b>
            {item.full_name}
          </p>
        </div>
      );
    });
  };

  /*useEffect(() => {
    getUser();
  }, []);*/
  return (
    <div>
      <h1 className="user_info"> User information </h1>
      <div className="inputfiled">
        <input
          type="text"
          className="userInput"
          placeholder="enter your Repo "
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button onClick={getUser} className="Btn">
          {" "}
          Search user{" "}
        </button>
      </div>
      <div className="combin">
        <div className="UserDeatils_card">
          <img className="photo" src={user.avatar_url}></img>
          <p className="result">
            <b>User name:- </b>
            {user.login}
          </p>
          <p className="result">
            <b>User_id :- </b>
            {user.id}
          </p>
          <p>
            <b>node_id :- </b>
            {user.node_id}
          </p>
        </div>
        <div className="reposResponse">
          {getUserrepo}
          <p className="List_repo_heading">
            <b>List of {userInput} repos </b>
          </p>
          <div className="list_repo">{_renderRepo()}</div>
        </div>
      </div>
    </div>
  );
};

export default DemoUser;
