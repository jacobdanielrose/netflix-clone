import * as Form from '@radix-ui/react-form';

export default function Input() {
    return (
            <Form.Root className="relative text-white" >
                <Form.Field name="email">
                    <Form.Control asChild>
                        <input
                            className="block rounded-md
                            px-6 pt-6 pb-1 w-full text-md
                            bg-neutral-700
                            appearance-none
                            focus:outline-none
                            focus:ring-0
                            peer
                            invalid:border-b-1"
                            placeholder=" "
                            type="email" required
                        />
                    </Form.Control>
                    <Form.Label
                        className="absolute
                            text-md
                            text-zinc-400
                            duration-150
                            transform
                            -translate-y-3
                            scale-75
                            top-4
                            z-10
                            origin-[0]
                            left-6
                            peer-placeholder-shown:scale-100
                            peer-placeholder-shown:translate-y-0
                            peer-focus:scale-75
                            peer-focus:-translate-y-3">
                        Email
                    </Form.Label>
                    <Form.Message
                        className="bg-red text-md rounded-md"
                        match="valueMissing">
                        Please enter your email
                    </Form.Message>
                    <Form.Message match="typeMismatch">
                        Please provide a valid email
                    </Form.Message>
                </Form.Field>
                <Form.Submit asChild>
                    <button>
                        Post question
                    </button>
                </Form.Submit>
            </Form.Root>
    )
}