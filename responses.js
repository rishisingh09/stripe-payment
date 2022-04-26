const customer = {
    "id": "cus_LZvTnj6SXVNe0Y",
    "object": "customer",
    "address": null,
    "balance": 0,
    "created": 1650968882,
    "currency": null,
    "default_source": null,
    "delinquent": false,
    "description": null,
    "discount": null,
    "email": null,
    "invoice_prefix": "53F01F96",
    "invoice_settings": {
        "custom_fields": null,
        "default_payment_method": null,
        "footer": null
    },
    "livemode": false,
    "metadata": {},
    "name": null,
    "next_invoice_sequence": 1,
    "phone": null,
    "preferred_locales": [],
    "shipping": null,
    "tax_exempt": "none",
    "test_clock": null
}

const paymentIntent = {
    "id": "pi_3Kslj4I4vWfsmwHS0mMCDgFG",
    "object": "payment_intent",
    "amount": 50,
    "amount_capturable": 0,
    "amount_details": {
        "tip": {
            "amount": null
        }
    },
    "amount_received": 0,
    "application": null,
    "application_fee_amount": null,
    "automatic_payment_methods": {
        "enabled": true
    },
    "canceled_at": null,
    "cancellation_reason": null,
    "capture_method": "automatic",
    "charges": {
        "object": "list",
        "data": [],
        "has_more": false,
        "total_count": 0,
        "url": "/v1/charges?payment_intent=pi_3Kslj4I4vWfsmwHS0mMCDgFG"
    },
    "client_secret": "pi_3Kslj4I4vWfsmwHS0mMCDgFG_secret_YykqHCyCN17qtEd9JRrG4EWUg",
    "confirmation_method": "automatic",
    "created": 1650969274,
    "currency": "usd",
    "customer": "cus_LZvTnj6SXVNe0Y",
    "description": null,
    "invoice": null,
    "last_payment_error": null,
    "livemode": false,
    "metadata": {},
    "next_action": null,
    "on_behalf_of": null,
    "payment_method": null,
    "payment_method_options": {
        "card": {
            "installments": null,
            "mandate_options": null,
            "network": null,
            "request_three_d_secure": "automatic"
        }
    },
    "payment_method_types": [
        "card"
    ],
    "processing": null,
    "receipt_email": null,
    "review": null,
    "setup_future_usage": "off_session",
    "shipping": null,
    "source": null,
    "statement_descriptor": null,
    "statement_descriptor_suffix": null,
    "status": "requires_payment_method",
    "transfer_data": null,
    "transfer_group": null
}

const setupIntent = {
    "id": "seti_1KsmSKI4vWfsmwHSl9ADC1Gc",
    "object": "setup_intent",
    "application": null,
    "cancellation_reason": null,
    "client_secret": "seti_1KsmSKI4vWfsmwHSl9ADC1Gc_secret_LZwLn8qMpdl6cv8FASuQGjOwB5yiANE",
    "created": 1650972080,
    "customer": "cus_LZvTnj6SXVNe0Y",
    "description": null,
    "last_setup_error": null,
    "latest_attempt": null,
    "livemode": false,
    "mandate": null,
    "metadata": {},
    "next_action": null,
    "on_behalf_of": null,
    "payment_method": null,
    "payment_method_options": {
        "card": {
            "mandate_options": null,
            "request_three_d_secure": "automatic"
        }
    },
    "payment_method_types": [
        "card"
    ],
    "single_use_mandate": null,
    "status": "requires_payment_method",
    "usage": "off_session"
}

const paymentMethods = {
    "object": "list",
    "data": [
        {
            "id": "pm_1KsmUgI4vWfsmwHSy7desQyL",
            "object": "payment_method",
            "billing_details": {
                "address": {
                    "city": null,
                    "country": "IN",
                    "line1": null,
                    "line2": null,
                    "postal_code": null,
                    "state": null
                },
                "email": null,
                "name": null,
                "phone": null
            },
            "card": {
                "brand": "visa",
                "checks": {
                    "address_line1_check": null,
                    "address_postal_code_check": null,
                    "cvc_check": "pass"
                },
                "country": "US",
                "exp_month": 2,
                "exp_year": 2044,
                "fingerprint": "jz32WfhWvxFaqypJ",
                "funding": "credit",
                "generated_from": null,
                "last4": "4242",
                "networks": {
                    "available": [
                        "visa"
                    ],
                    "preferred": null
                },
                "three_d_secure_usage": {
                    "supported": true
                },
                "wallet": null
            },
            "created": 1650972226,
            "customer": "cus_LZvTnj6SXVNe0Y",
            "livemode": false,
            "metadata": {},
            "type": "card"
        },
        {
            "id": "pm_1KsmGUI4vWfsmwHSKcaUs9nt",
            "object": "payment_method",
            "billing_details": {
                "address": {
                    "city": null,
                    "country": "IN",
                    "line1": null,
                    "line2": null,
                    "postal_code": null,
                    "state": null
                },
                "email": null,
                "name": null,
                "phone": null
            },
            "card": {
                "brand": "visa",
                "checks": {
                    "address_line1_check": null,
                    "address_postal_code_check": null,
                    "cvc_check": "pass"
                },
                "country": "US",
                "exp_month": 3,
                "exp_year": 2032,
                "fingerprint": "jz32WfhWvxFaqypJ",
                "funding": "credit",
                "generated_from": null,
                "last4": "4242",
                "networks": {
                    "available": [
                        "visa"
                    ],
                    "preferred": null
                },
                "three_d_secure_usage": {
                    "supported": true
                },
                "wallet": null
            },
            "created": 1650971346,
            "customer": "cus_LZvTnj6SXVNe0Y",
            "livemode": false,
            "metadata": {},
            "type": "card"
        }
    ],
    "has_more": false,
    "url": "/v1/payment_methods"
}