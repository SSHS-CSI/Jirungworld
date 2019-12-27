const React = require("react");
const { useState } = React;

const { makeStyles } = require("@material-ui/core/styles");

const CssBaseline = require("@material-ui/core/CssBaseline").default;
const Grid = require("@material-ui/core/Grid").default;
const Paper = require("@material-ui/core/Paper").default;
const Fab = require("@material-ui/core/Fab").default;

const EditIcon = require("@material-ui/icons/Edit").default;
const ClearIcon = require("@material-ui/icons/Clear").default;

const AppBar = require("./appbar.js");
const Drawer = require("./drawer.js");
const Class = require("./class.js");
const Assignment = require("./assignment.js");
const LectureSelector = require("./lecture-selector.js");
const TimeTable = require("./time-table.js");
const LoginDialog = require("./logindialog.js");
const FoodmenuDialog = require("./foodmenu.js");

const useStyles = makeStyles(theme => ({
    root: {
        display: "relative",
        padding: theme.spacing(2)
    },
    mainArea: {
        marginTop: theme.spacing(6),
        padding: theme.spacing(1),
        minHeight: `calc(100vh - ${theme.spacing(8)}px)`
    },
    fullHeightPaper: { height: "100%" },
    fullHeightTimeTable: { height: "100%" },
    timeTableTile: { padding: theme.spacing(2) },
    editIcon: {
        position: "absolute",
        bottom: theme.spacing(4),
        right: theme.spacing(4)
    }
}));

const subjects = [{
    name: "수학",
    lectures: [{
        name: "수학 IV",
        subject: "수학",
        classes: [{
            times: [{
                weekday: 1,
                start: 1,
                end: 2
            }, {
                weekday: 4,
                start: 5,
                end: 6
            }],
            teacher: "노창균",
            students: ["조성빈", "신기준", "권현우"],
            assignments: []
        }, {
            times: [{
                weekday: 2,
                start: 1,
                end: 2
            }, {
                weekday: 3,
                start: 1,
                end: 2
            }],
            teacher: "김지애",
            students: ["박정환", "정현석", "박정민"],
            assignments: []
        }, {
            times: [{
                weekday: 3,
                start: 3,
                end: 4
            }, {
                weekday: 5,
                start: 1,
                end: 2
            }],
            teacher: "노창균",
            students: ["김성민", "이창민", "김시환"],
            assignments: []
        }, {
            times: [{
                weekday: 4,
                start: 1,
                end: 2
            }, {
                weekday: 5,
                start: 3,
                end: 4
            }],
            teacher: "노창균",
            students: ["안준서", "박정환", "권현우"],
            assignments: []
        }, {
            times: [{
                weekday: 1,
                start: 5,
                end: 6
            }, {
                weekday: 4,
                start: 3,
                end: 4
            }],
            teacher: "노창균",
            students: ["유다진", "윤석규", "정명우"],
            assignments: []
        }, {
            times: [{
                weekday: 1,
                start: 3,
                end: 4
            }, {
                weekday: 5,
                start: 3,
                end: 4
            }],
            teacher: "노창균",
            students: ["최서영", "김하늘", "임유나"],
            assignments: []
        }]
    }, {
        name: "미적분학 I",
        subject: "수학",
        classes: [ {
            times: [{
                weekday: 3,
                start: 3,
                end: 4
            }, {
                weekday: 5,
                start: 1,
                end: 2
            }],
            teacher: "김지애",
            students: ["권현우", "안준서", "손현준"],
            assignments: []
        }, {
            times: [{
                weekday: 3,
                start: 3,
                end: 4
            }, {
                weekday: 5,
                start: 1,
                end: 2
            }],
            teacher: "노창균",
            students: ["이재훈", "양승민", "김강현"],
            assignments: []
        }, {
            times: [{
                weekday: 3,
                start: 3,
                end: 4
            }, {
                weekday: 5,
                start: 1,
                end: 2
            }],
            teacher: "김지애",
            students: ["권현우", "안준서", "손현준"],
            assignments: []
        }, {
            times: [{
                weekday: 3,
                start: 3,
                end: 4
            }, {
                weekday: 5,
                start: 1,
                end: 2
            }],
            teacher: "노창균",
            students: ["이재훈", "양승민", "김강현"],
            assignments: []
        }, {
            times: [{
                weekday: 3,
                start: 3,
                end: 4
            }, {
                weekday: 5,
                start: 1,
                end: 2
            }],
            teacher: "김지애",
            students: ["임유나", "김하늘", "양호진"],
            assignments: []
        }, {
            times: [{
                weekday: 3,
                start: 3,
                end: 4
            }, {
                weekday: 5,
                start: 1,
                end: 2
            }],
            teacher: "노창균",
            students: ["유다진", "고상연", "허원석"],
            assignments: []
        }, {
            times: [{
                weekday: 3,
                start: 3,
                end: 4
            }, {
                weekday: 5,
                start: 1,
                end: 2
            }],
            teacher: "김지애",
            students: ["정현서", "김어진", "김서진"],
            assignments: []
        }, {
            times: [{
                weekday: 3,
                start: 3,
                end: 4
            }, {
                weekday: 5,
                start: 1,
                end: 2
            }],
            teacher: "노창균",
            students: ["김정환", "박영현", "고현수"],
            assignments: []
        }]
    }]

}, {
    name: "물리",
    lectures: [{
        name: "물리 IV",
        subject: "수학",
        classes: [{
            times: [{
                weekday: 1,
                start: 3,
                end: 4
            }, {
                weekday: 4,
                start: 3,
                end: 4
            }],
            teacher: "김성준",
            students: ["조성빈", "신기준", "권현우"],
            assignments: []
        }, {
            times: [{
                weekday: 2,
                start: 3,
                end: 4
            }, {
                weekday: 3,
                start: 5,
                end: 6
            }],
            teacher: "이현정",
            students: ["박정환", "정현석", "박정민"],
            assignments: []
        }, {
            times: [{
                weekday: 3,
                start: 1,
                end: 2
            }, {
                weekday: 5,
                start: 5,
                end: 6
            }],
            teacher: "배동일",
            students: ["김성민", "이창민", "김시환"],
            assignments: []
        }, {
            times: [{
                weekday: 4,
                start: 3,
                end: 4
            }, {
                weekday: 5,
                start: 1,
                end: 2
            }],
            teacher: "안민기",
            students: ["안준서", "박정환", "권현우"],
            assignments: []
        }, {
            times: [{
                weekday: 1,
                start: 1,
                end: 2
            }, {
                weekday: 4,
                start: 5,
                end: 6
            }],
            teacher: "전효성",
            students: ["유다진", "윤석규", "정명우"],
            assignments: []
        }, {
            times: [{
                weekday: 1,
                start: 5,
                end: 6
            }, {
                weekday: 5,
                start: 1,
                end: 2
            }],
            teacher: "이현정",
            students: ["최서영", "김하늘", "임유나"],
            assignments: []
        }]
    }]
  }];

const App = () => {
    const classes = useStyles();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(true);
    const [isClassDialogOpen, setIsClassDialogOpen] = useState(false);
    const [isAssignmentDialogOpen, setIsAssignmentDialogOpen] = useState(false);
    const [timeTable, setTimeTable] = useState([]);
    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
    const [isFoodmenuDialogOpen, setFoodmenuDialogOpen] = useState(false);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
              onMenuClick={() => setIsDrawerOpen(true)}
              toggleLoginDialog={() => setIsLoginDialogOpen(true)}
            />
            <Drawer
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              onAssignmentClick={() => setIsAssignmentDialogOpen(true)}
              onClassClick={() => setIsClassDialogOpen(true)}
              onFoodmenuClick={() => setFoodmenuDialogOpen(true)}
            />
            <Class
                title="객체지향" open={isClassDialogOpen}
                onClose={() => setIsClassDialogOpen(false)} teacher="박미영"
                students={["조성빈", "신기준", "권현우"]} assignments={[{
                    title: "연습문제 1",
                    deadline: new Date("Sun Jul 30 2019")
                }]}

            />
            <Assignment
                open={isAssignmentDialogOpen} title="과제" onClose={() => setIsAssignmentDialogOpen(false)}
                assignment={{
                    title: "연습문제 1",
                    content: "연습문제 1의 3번 문제부터 16번 문제까지 풀기",
                    deadline: new Date("Sun Jul 30 2019"),
                    author: "조성빈"
                }} />
            <LoginDialog
                open={isLoginDialogOpen} onClose={() => setIsLoginDialogOpen(false)}
                logindialog={{
                    Id: "admin",
                    Password: "admin1"
                }} />
            <FoodmenuDialog
                open={isFoodmenuDialogOpen}
                onClose={() => setFoodmenuDialogOpen(false)}

                foodmenu={{
                  breakfast: "풀떼기",
                  lunch: "고기",
                  dinner: "면"
                }} />
            <Fab color="primary" className={classes.editIcon} onClick={() => setIsEditMode(isEditMode => !isEditMode)}>
                {isEditMode ? <ClearIcon /> : <EditIcon />}
            </Fab>
            <Grid container spacing={3} className={classes.mainArea}>
                {isEditMode && (
                    <Grid item xs={3}>
                        <Paper className={classes.fullHeightPaper}>
                            <LectureSelector subjects={subjects} timeTable={timeTable} setTimeTable={setTimeTable} />
                        </Paper>
                    </Grid>
                )}
                <Grid item xs={isEditMode ? 9 : 12}>
                    <div className={classes.fullHeightPaper}>
                        <TimeTable className={classes.fullHeightTimeTable} timeTable={timeTable} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

module.exports = App;
