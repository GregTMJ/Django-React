import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import Operations from "../AxiosRequests/Axiosfunc";
import {Table} from "react-bootstrap";

import "../styles/TechOp.css";
import techResultTable from "../tableCreationFunction/techResultTable";
import stopCauseTable from "../tableCreationFunction/stopCauseTable";
import NoContent from "./NoContent";


const Operation = new Operations()

function TechOp() {

    const location = useLocation();
    const search = location.search;
    const query = new URLSearchParams(search);
    const machineRef = query.get('TechOp')
    const params = useParams().id;

    const [data, setData] = useState(null)
    const [cause, setCause] = useState(null)
    const [state, setState] = useState(false);


    useEffect(() => {
        if (machineRef) {

            Operation.getUnits().then(res => {
                if (res.data) {
                    for (let i = 0; i < res.data.length; i++) {
                        if (params == res.data[i].unit_ref && machineRef == res.data[i].unit_name) {
                            setState(true);
                            Operation.getOperations(params).then(response => {
                                setData(response.data);
                                techResultTable(data, machineRef)
                            })

                            Operation.getDownCause(params).then(response => {
                                setCause(response.data);
                                stopCauseTable(cause, machineRef)
                            })
                        }
                    }

                }
            })
        }
    }, [])

    if (!machineRef || !state) {
        return (<div>
            <NoContent/>
        </div>)
    }

    return (
        <div>
            <h1>
                {query.get('TechOp')}
            </h1>
            <div>
                <Table className={"Datatable"}>
                    <thead>
                    <tr>
                        <th>
                            Название установки
                        </th>
                        <th>
                            Общее количество труб
                        </th>
                        <th>
                            Количество годных труб
                        </th>
                        <th>
                            Количество брака
                        </th>
                        <th>
                            Количество ремонтных
                        </th>
                        <th>
                            Производительность (труб/10 мин)
                        </th>
                    </tr>
                    </thead>
                    <tbody id={"tbody-content-results"}/>
                </Table>
            </div>

            <div>
                <table className={"Datatable"}>
                    <thead>
                    <tr>
                        <th>
                            Название установки
                        </th>
                        <th>
                            Идентификатор работника
                        </th>
                        <th>
                            Причина сбоя
                        </th>
                        <th>
                            Начала время остановки
                        </th>
                        <th>
                            Время продолжения работы участка
                        </th>
                    </tr>
                    </thead>
                    <tbody id={"tbody-content-cause"}/>
                </table>
                <button className={"myButton"}><a href={`/cause/?techId=${params}`}>Создать
                    простой</a></button>
            </div>


        </div>
    )
}

export default TechOp;