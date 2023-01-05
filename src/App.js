import React, { useState } from 'react';
import './App.css';

export default function HsAdmin(props) {
  const [person, setPerson] = useState({
    name: '에이든',
    title: '주니어',
    job: '개발자',
    admins: [
      {
        id: '1',
        name: '케일',
        title: '시니어',
        job: '개발자',
      },
      {
        id: '2',
        name: '존',
        title: '시니어',
        job: '개발자',
      },
    ],
  });
  return (
    <div className='text'>
      <h1>{`${person.name}는 ${person.title}${person.job}`}</h1>
      <h3>{`${person.name}의 선임목록 `}</h3>
      <ul>
        {person.admins.map((admin, id) => (
          <li key={id}>{`${admin.name} (${admin.title}${admin.job})`}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          const name = prompt('변경하고 싶은 선임의 이름을 입력하세요');
          const nameChange = prompt('변경할 이름을 입력하세요');
          setPerson((person) => ({
            ...person,
            admins: person.admins.map((admin) => {
              if (admin.name === name) {
                return { ...admin, name: nameChange };
              }
              return admin;
            }),
          }));
        }}
      >
        선임 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const name = prompt('직급을 변경하고 싶은 선임의 이름을 입력하세요');
          const titleChange = prompt('변경할 직급을 입력하세요');
          setPerson((person) => ({
            ...person,
            admins: person.admins.map((admin) => {
              if (admin.name === name) {
                return { ...admin, title: titleChange };
              }
              return admin;
            }),
          }));
        }}
      >
        선임 직급 바꾸기
      </button>
      <button
        onClick={() => {
          const name = prompt('직무을 변경하고 싶은 선임의 이름을 입력하세요');
          const jobChange = prompt('변경할 직무을 입력하세요');
          setPerson((person) => ({
            ...person,
            admins: person.admins.map((admin) => {
              if (admin.name === name) {
                return { ...admin, job: jobChange };
              }
              return admin;
            }),
          }));
        }}
      >
        선임 직무 바꾸기
      </button>
      <br />
      <button
        onClick={() => {
          const addName = prompt('추가할 선임의 이름을 입력하세요');
          const addtitle = prompt(`${addName}에 직급을 입력하세요`);
          const addjob = prompt(`${addName}에 직무를 입력하세요`);
          setPerson((person) => ({
            ...person,
            admins: [
              ...person.admins,
              { name: addName, title: addtitle, job: addjob },
            ],
          }));
        }}
      >
        선임 추가하기
      </button>
      <button
        onClick={() => {
          const delName = prompt('삭제할 선임의 이름을 입력하세요');
          setPerson((person) => ({
            ...person,
            admins: person.admins.filter(
              (delAdmin) => delAdmin.name !== delName
            ),
          }));
        }}
      >
        선임 삭제하기
      </button>
    </div>
  );
}
