import styled from "styled-components";

const TdFirst = styled`
    padding-left: 15px;
    color: $darkTextColor;
    width: 25%;
    font-weight: 600;
    padding-right: 10px;
    font-size: 15px;
    height: 70px;
`
const TdSecond = styled`
    color: $lightTextColor;
    padding-right: 15px;
    font-size: 15px;
    height: 70px;
`
const TdThird = styled`
    color: $darkTextColor;
    font-weight: 600;
    font-size: 15px;
    height: 70px;
`
const TdForth = styled`
    text-align: right;
    width: 25%;
    font-size: 15px;
    height: 70px;
`
const Button = styled.button`
    width: 95px;
    height: 35px;
    background-color: #c9f7f5;
    border: none;
    color: #1bc5bd;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
`

 export default function BodyWallOfShame({users,setUsersArray}) {
   function Increase(id){
        setUsersArray((prev) =>
            prev.map((event) => {
                if (event.id === id) {
                    return { ...event, count: event.count + 1 };
                }
                return event;
            })
        );
    };

    return (
        <tbody>
            {users.map((event) => {
                return (
                    <tr className="bodyTr" key={event.id}>
                        <TdFirst>{event.name}</TdFirst>
                        <TdSecond>{event.excuse}</TdSecond>
                        <TdThird>{event.count}</TdThird>
                        <TdForth>
                            <Button onClick={() => Increase(event.id)}>Increase </Button>
                        </TdForth>
                    </tr>
                );
            })}
        </tbody>
    );
};