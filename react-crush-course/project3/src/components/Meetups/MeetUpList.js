import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
function MeetUpList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map(meeetup => 
            <MeetupItem 
                key={meeetup.id}
                id={meeetup.id}
                image={meeetup.image}
                title={meeetup.title}
                address={meeetup.address}
                description={meeetup.description}
            /> )}
        </ul>
    )
}
export default MeetUpList;