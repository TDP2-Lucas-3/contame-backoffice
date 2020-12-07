import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import './home/Home.css';
import {Row, Col, Container} from 'react-bootstrap';
import {Select} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import {StatesByCategory} from './home/charts/states_by_category/StatesByCategory';
import {StateDataTable} from './home/stateDataTable/StateDataTable';

const STATES_BY_CATEGORY = 'Estados por categoría';
const HEAT_MAP = 'Mapa de calor';

const CHART_COMPONENTS = {
  [STATES_BY_CATEGORY]: <StatesByCategory />,
  [HEAT_MAP]: <p>Heat map!</p>,
};

export const Home = withRouter(() => {
  const [chart, setChart] = useState(STATES_BY_CATEGORY);

  return (
    <div className="welcomeMessage">
      <Container>
        <Row>
          <Col sm={9}>
            <h1>Centro de estadísticas</h1>
          </Col>
          <Col>
            <Select value={chart} onChange={(e) => setChart(e.target.value)}>
              <MenuItem value={STATES_BY_CATEGORY}>
                {STATES_BY_CATEGORY}
              </MenuItem>
              <MenuItem value={HEAT_MAP}>{HEAT_MAP}</MenuItem>
            </Select>
          </Col>
        </Row>

        {CHART_COMPONENTS[chart]}
        <StateDataTable />
      </Container>
    </div>
  );
});
