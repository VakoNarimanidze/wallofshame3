import styled from "styled-components";
import BodyWallOfShame from "./BodyWallOfShame";

const Table = styled.table`
    width: 1100px;
    margin: 30px auto 0 auto;
    text-align: left;
    border-collapse: collapse;
`
const Thead = styled.thead`
    height: 50px;
    background-color: #f3f6f9;
    width: 1600px;
`
const ThFirst = styled.th`
    color: $lightTextColor;
    font-size: 14px;
    font-weight: 500;
`

const ThSecondThird = styled.th`
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    padding-left: 15px;
    color:#b5b5c3;
    font-size: 14px;
    font-weight: 500;
`
const ThLast = styled.th`
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`
export default function TableWallOfShame({users,setUsersArray}) {
    return (
        <div>
            <Table>
                <Thead>
                    <tr className="TableTr">
                        <ThFirst >Name</ThFirst>
                        <ThSecondThird >Excuse</ThSecondThird>
                        <ThSecondThird>Count</ThSecondThird>
                        <ThLast></ThLast>
                    </tr>
                </Thead>
                <BodyWallOfShame
                    users={users}
                    setUsersArray={setUsersArray}
                />
            </Table>
        </div>
    );
};