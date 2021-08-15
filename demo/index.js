import interpreter from "../src/brainfuck.js"

const src = `
++++++++
> +++ <
>>>>>> +++++++ <<<<<<
[
    -
  
    >> + <<
    > - <
    
    > [
        > [ - ] <
        [ - >> + << ]
    ] <
    
    >>> [ - << + >> ] <<<
    
    >> 
    [ 
        >--[----->+<]>.+++++++++..>++++++++++. [ - ] < [ - ] < [ - ] <
        < +++ >
        [ - ]
    ] 
    <<
    
    
    >>>>>
       >> + <<
    > - <
    
    > [
        > [ - ] <
        [ - >> + << ]
    ] <
    
    >>> [ - << + >> ] <<<
    
    >> 
    [ 
        >--[----->+<]>----.-.--[--->+<]>---.>++++++++++. [ - ] < [ - ] < [ - ] <<
        < +++++++ >
        [ - ]
    ] 
    <<
    <<<<<
]
`

interpreter(src)
