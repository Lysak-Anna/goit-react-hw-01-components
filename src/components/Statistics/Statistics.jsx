import PropTypes from 'prop-types'
import { Section, Title, StatList, StatItem, StatText  } from './Statistics.styled';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export default function Statistics({stats, title}) {
    return (
        <Section>
        {title && ( <Title>{title}</Title>)}
            

    <StatList>
    {stats.map(element => 
        <StatItem key={element.id} style={{ backgroundColor: getRandomHexColor() }}>
    <StatText>{element.label}</StatText>
    <StatText>{element.percentage}%</StatText>
    </StatItem>)}
  </StatList>
</Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired

    }))
}
