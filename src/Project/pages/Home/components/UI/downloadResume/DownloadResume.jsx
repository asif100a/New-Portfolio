import GradientBorderBtn from '../buttons/GradientBorderBtn';

const DownloadResume = () => {
    return (
        <>
            <a href="/N.M._Asif_Sheikh_Junior_Fullstack_Engineer.pdf" download>
                <GradientBorderBtn text={'Download Resume'} type={'download'} />
            </a>
        </>
    );
};

export default DownloadResume;
