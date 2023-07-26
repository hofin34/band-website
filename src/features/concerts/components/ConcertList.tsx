import { Card, CardBody, Flex, Heading, IconButton, Spinner, Text } from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';
import useConcerts from '../api/useConcerts';

const getDateDay = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.getDate();
}

const months = ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"]

const getDateMonthName = (dateStr: string) => {
    const date = new Date(dateStr);
    return months[date.getMonth()]
}

function ConcertList() {
    const { data, error, isLoading } = useConcerts();
    return (
        <>
            {error && <Text color="red">Chyba při načítání koncertů</Text>}
            {isLoading && <Spinner />}
            {data?.result.sort(function (a, b) {
                return new Date(b.date).valueOf() - new Date(a.date).valueOf();
            }).map((concert) =>
                <Card key={concert._id} direction='row' m='15px' p='15px' maxW='4xl'>
                    <Flex direction='column' justifyContent='center' alignItems='center'>
                        <Heading color='red.700'>{getDateDay(concert.date)}.</Heading>
                        <Text color='red.700'>{getDateMonthName(concert.date)}</Text>
                        <Text mt='10px' fontWeight='bold' fontSize='lg'>{concert.city}</Text>
                    </Flex>

                    <CardBody ml='20px'>
                        <Heading fontSize='xl' key={concert._id}>{concert.name}</Heading>
                        <Text>{concert.description}</Text>
                    </CardBody>
                    <IconButton aria-label='external-link' icon={<FiExternalLink />} onClick={() => window.open(concert.eventLink, '_blank')} />
                </Card>


            )}
        </>

    )
}

export default ConcertList