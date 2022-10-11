import React from 'react'
import Complaints from '../components/Complaints';
import Campaigns from '../components/Campaigns';
import Settings from '../components/Settings';
import Reports from '../components/Reports';
import Users from '../components/Users';
import Dashboard from '../components/Dashboard';

export default function ChangedPage(props) {

    return (
        <div style={{ marginTop: "5%" }}>
            {props.setValue == 1 &&
                <Dashboard />
            }
            {props.setValue == 2 &&
                <Campaigns />
            }
            {props.setValue == 3 &&
                <Users />
            }
            {props.setValue == 4 && <Reports />}
            {props.setValue == 5 && <Complaints />}
            {props.setValue == 6 && <Settings />}





        </div>
    )
}
