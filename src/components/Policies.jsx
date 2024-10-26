import React from "react";

function Policies() {
  return (
    <>
      <h2>Appointment Policies:</h2>
      <section>
        <h3>Non-Refundable Deposits</h3>
        <ul>
          <li>Appointments require a $20 non-refundable deposit.</li>
          <li>
            If you cancel your appt at any time you will not receive a refund of
            your deposit.
          </li>
          <li>
            Your deposit can be transferred to your very next appt if you cancel
            with at least 48 hours notice.
          </li>
        </ul>
      </section>

      <section>
        <h3>Cancellations</h3>
        <ul>
          <li>All cancellations must occur at least 48 hours in advance.</li>
          <li>
            If you fail to cancel your appointment at least 48 hours in
            advance100% of the service fee will be charged to the card on file.
          </li>
          <li>
            Should the charge not go through you will be unable to book future
            appointments until your late fee invoice has been paid.
          </li>
        </ul>
      </section>

      <section>
        <h3>No Call / No Show</h3>
        <ul>
          <li>
            We text and email to remind you of your appointment date and time.
            Additionally we provide you with options to cancel should the need
            arise.
          </li>
          <li>
            100% of the service fee will be charged to your card if you cancel
            the same day or are a no call/ no show.
          </li>
        </ul>
      </section>

      <section>
        <h3>Late Arrivals</h3>
        <ul>
          <li>
            If you suspect that you will be more than 10 minutes late please
            call (555) 555-5555 as we may need to reschedule your appointment or
            adjust your services.
          </li>
          <li>
            Keep in mind that appointments cancelled the same day (even if for
            tardiness) will still incur 100% of the service fee.
          </li>
        </ul>
      </section>
    </>
  );
}

export default Policies;
