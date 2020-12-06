import React from 'react';
import classNames from 'classnames';
import Button from './Button';
import ProgressBar from './ProgressBar';

const QuestionBody = (props) => {
    const { questions } = props; // props(read-only)
    const LAST_PAGE_IDX = props.lastPageIdx;
    console.log(props.pageIdx > 0 && props.pageIdx <= LAST_PAGE_IDX-2);
    console.log(props.pageIdx, LAST_PAGE_IDX);
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    const bottom_wrapper_style = {
        'width':"100%",
        'display':'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
    }
    const wrapperStyle = {
        "width": "100%",
        "height": "8px",
        "margin": "10px auto",
        "padding": "0px",
        "backgroundColor": "#EAEAEA",
    }
    return(
    <div className={classNames("bottom-wrapper")} style={bottom_wrapper_style}>
        <div className={classNames('question-body-wrapper')} onClick={props.onPress} style={props.pageIdx > 0 && props.pageIdx <= LAST_PAGE_IDX-2 ? {height: 291.4} : {}}>
            {questions.map((question, idx) => 
                <Button key={idx} 
                        type={question.type} 
                        text={question.text} 
                        onPress={props.onPress} 
                        style={{marginTop:15, marginBottom:15,  height:50,}}/>)}
        </div>
        <span style={{fontSize:"18px",fontWeight:"bold", textAlign:"right", display:"block", marginTop:"56px", marginRight:"10px", alignSelf:'flex-end'}}>{props.pageIdx}/{14}</span>
        <ProgressBar wrapperStyle={wrapperStyle} progress={props.pageIdx} questions_len={14}/>
    </div>
    )
}

export default QuestionBody;