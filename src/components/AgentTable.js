import React from "react";

export const AgentTable = (props) => (
    <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Agent Name</th>
                <th>Date of Birth</th>
                <th>Height</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.agents.length > 0 ? (
                props.agents.map((agent) => (
                    <tr key={agent.agentId}>
                        <td>{agent.agentId}</td>
                        <td>{agent.firstName} {agent.middleName} {agent.lastName}</td>
                        <td>{agent.dob}</td>
                        <td>{agent.heightInInches}"</td>
                        <td>
                            <div>
                                <button
                                    className="btn btn-success btn-sm"
                                    onClick={() => props.handleEdit(agent.agentId)}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => props.handleDelete(agent.agentId)}
                                    className="btn btn-danger btn-sm ml-2"
                                >
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No Agents</td>
                </tr>
            )}
        </tbody>
    </table>
)