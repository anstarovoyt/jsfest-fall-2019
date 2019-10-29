type Result =
    { success: true, callback: () => void } |
    { success: false };


type Result = {
    success: boolean;
    callback?(): void //exists if "success=true"
}


function process(p: Result) {
    p.callback();
}

function process(p: Result) {
    if (p.success) {
        p.callback(); //ok
    }
}

process({success : true}) //error
process({success : true, callback() {}}) //ok
