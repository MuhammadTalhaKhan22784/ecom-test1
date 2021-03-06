import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function Chips(props) {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0 },
  ]);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  console.log("chip name", props.name)

  return (
    <div component="ul" className={classes.root}>
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={props.name === "see all" ? props.id : props.name}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </div>
  );
}
