import {
    Paper,
    Text,
    TextInput,
    Textarea,
    Button,
    Group,
    SimpleGrid,
    createStyles,
    AspectRatio
} from '@mantine/core';
import {useState} from "react";
import {ContactIconsList} from './ContactIcons';
import bg from './bg.svg';
// import {useAppDispatch} from "../../redux/hooks";
// import {useNavigate} from "react-router-dom";

const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan('sm');

    return {
        wrapper: {
            display: 'flex',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
            borderRadius: theme.radius.lg,
            padding: 4,
            border: `1px solid ${
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
            }`,

            [BREAKPOINT]: {
                flexDirection: 'column',
            },
        },

        form: {
            boxSizing: 'border-box',
            flex: 1,
            padding: theme.spacing.xl,
            paddingLeft: theme.spacing.xl * 2,
            borderLeft: 0,

            [BREAKPOINT]: {
                padding: theme.spacing.md,
                paddingLeft: theme.spacing.md,
            },
        },

        fields: {
            marginTop: -12,
        },

        fieldInput: {
            flex: 1,

            '& + &': {
                marginLeft: theme.spacing.md,

                [BREAKPOINT]: {
                    marginLeft: 0,
                    marginTop: theme.spacing.md,
                },
            },
        },

        fieldsGroup: {
            display: 'flex',

            [BREAKPOINT]: {
                flexDirection: 'column',
            },
        },

        contacts: {
            boxSizing: 'border-box',
            position: 'relative',
            borderRadius: theme.radius.lg - 2,
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid transparent',
            padding: theme.spacing.xl,
            flex: '0 0 280px',

            [BREAKPOINT]: {
                marginBottom: theme.spacing.sm,
                paddingLeft: theme.spacing.md,
            },
        },

        title: {
            marginBottom: theme.spacing.xl * 1.5,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,

            [BREAKPOINT]: {
                marginBottom: theme.spacing.xl,
            },
        },

        control: {
            [BREAKPOINT]: {
                flex: 1,
            },
        },
    };
});

export function ContactScreen() {
    const {classes} = useStyles();
    // const dispatch = useAppDispatch();
    // const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");


    const formData = new FormData();

    const submitHandler = (e) => {
        e.preventDefault();

        formData.append("name", name);
        formData.append("email", email);
        formData.append("topic", topic);
        formData.append("description", message);

        // dispatch(sendMessage(formData));
    };


    return (
        <div>
            <Paper shadow="md" radius="xl">
                <div className={classes.wrapper}>
                    <div className={classes.contacts}>
                        <Text size="lg" weight={700} className={classes.title} sx={{color: '#fff'}}>
                            İletişim Bilgileri
                        </Text>

                        <ContactIconsList variant="white"/>
                    </div>

                    <form className={classes.form} onSubmit={submitHandler}>
                        <Text size="lg" weight={700} className={classes.title}>
                            Bize Ulaşın
                        </Text>

                        <div className={classes.fields}>
                            <SimpleGrid cols={2} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
                                <TextInput value={name}
                                           onChange={(e) => setName(e.target.value)}
                                           label="İsim"
                                           placeholder="İsminizi Giriniz"
                                           required
                                />

                                <TextInput value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                           label="Email"
                                           placeholder="aaa@bbb.ccc"
                                           required
                                />
                            </SimpleGrid>

                            <TextInput
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                mt="md" label="Konu"
                                required
                            />

                            <Textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                mt="md"
                                label="Mesajınız"
                                placeholder="Lütfen bize iletmek istediklerinizi yazınız."
                                minRows={3}
                            />

                            <Group position="right" mt="md">
                                <Button type="submit" className={classes.control}>
                                    Gönder
                                </Button>
                            </Group>
                        </div>
                    </form>
                </div>

            </Paper>

            <Paper shadow={"md"} mt={20} radius={"xl"}>
                <AspectRatio ratio={16 / 9}>
                    <iframe
                        title={"sau_emergency"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.5466374120606!2d30.388383957578412!3d40.75732195845382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc52fb3c957280a5f!2sSakarya%20%C3%9Cniversitesi%20E%C4%9Fitim%20Ve%20Ara%C5%9Ft%C4%B1rma%20Hastanesi!5e0!3m2!1sen!2str!4v1670508599898!5m2!1sen!2str"
                        width="600" height="450" style={{border: 0, borderRadius: 20}} allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </AspectRatio>
            </Paper>
        </div>

    );
}