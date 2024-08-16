import {trpc} from '@/app/trpc';
import {useParams} from 'wouter';
import {TbTargetArrow} from 'react-icons/tb';
import {SiRelay} from 'react-icons/si';

import {ThumbsDown, ThumbsUp} from 'lucide-react';

import {Progress} from '@/app/components/ui/progress';
import {ImageCarousel} from './components/ImageCarousel';
import {Button} from '@/app/components/ui/button';
import {Card} from '@/app/components/ui/card';

const SinglePetition = () => {
    const {petition_id} = useParams();
    // const {data: petition} = trpc.petitions.get.useQuery({
    //     id: petition_id!!,
    // });
    return (
        <div className="container max-w-screen-sm mx-auto px-4 mt-28 flex flex-col gap-4">
            <h2 className="text-4xl font-bold">
                {/* {petition?.data.title} */}
                Repeal DSE and its derivatives
            </h2>
            <div className="flex items-center gap-3 font-medium text-neutral-700">
                <div className="flex items-center gap-2 border-r border-neutral-700 pr-3">
                    <TbTargetArrow />
                    {/* <span>{petition?.data.target}</span> */}
                    <span>4,000</span>
                </div>
                <div className="flex items-center gap-2">
                    <SiRelay />
                    {/* <span>{petition?.data.location}</span> */}
                    <span>Dhaka, Bangladesh</span>
                </div>
            </div>
            <p
                dangerouslySetInnerHTML={{
                    __html: '<p>this is a very long description of something that is a thing that is a thing. this thing should go away weeeee</p>',
                }}></p>
            {/* {petition?.data.description && (
                <p
                    dangerouslySetInnerHTML={{
                        __html: petition?.data.description,
                    }}></p>
            )} */}
            <div className="flex items-center gap-3 font-medium text-neutral-700">
                <div className="flex items-center gap-2 border-r border-neutral-700 pr-3">
                    <span>14,000 upvotes</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>4,000 downvotes</span>
                </div>
            </div>
            <Progress value={33} />
            <ImageCarousel />
            <div className="flex flex-row justify-between gap-4 mb-4">
                <Button variant={'outline'} className="flex-grow">
                    <ThumbsUp size={20} /> <p className="ml-2">Upvote</p>
                </Button>
                <Button variant={'outline'} className="flex-grow">
                    <ThumbsDown size={20} /> <p className="ml-2">Downvote</p>
                </Button>
            </div>
        </div>
    );
};

export default SinglePetition;
