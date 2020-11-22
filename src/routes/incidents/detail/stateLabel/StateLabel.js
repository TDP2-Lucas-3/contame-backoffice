import React from 'react';
import {ReportedLabel} from './states/ReportedLabel';
import {ArchivedLabel} from './states/ArchivedLabel';
import {SolvedLabel} from './states/SolvedLabel';
import {InProgressLabel} from './states/InProgressLabel';

export const StateLabel = (props) => {
  switch (props.state) {
    case 'REPORTADO':
      return <ReportedLabel state={props.state} />;
    case 'EN PROGRESO':
      return <InProgressLabel state={props.state} />;
    case 'RESUELTO':
      return <SolvedLabel state={props.state} />;
    case 'ARCHIVADO':
      return <ArchivedLabel state={props.state} />;
    default:
      return <ReportedLabel state={props.state} />;
  }
};
